import { useState } from 'react';
import './App.css'

function App() {
  const [tasks, setTasks] = useState ([{
    id: 0,
    task: "Eat breakfast",
    completed: true
  },
  {
    id: 1,
    task: "Brush teeth",
    completed: false
  },{
    id: 2,
    task: "Shower",
    completed: false
  }]);

  function deleteFromArray(arr, id) {
    const newArr = arr.map((item) => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });
    return newArr;
  }


  return(
    <>
      <header className="main-header">
        <h1>Todo List</h1>
      </header>
      <main>
        <form action="" onSubmit={(e)=>{
          e.preventDefault();
          const inputValue = document.getElementById("task-input").value;
          setTasks([...tasks, {
            id: tasks[tasks.length-1].id +1,
            task: inputValue,
            completed: false
          }]);
        }}>
          <input type="text" id="task-input" name="task-input"/>
          <button type="submit">Submit</button>
        </form>
        <ul>
          {tasks.map((item) => {
            return <li key={item.id}>
              <span>{item.task}</span>
              <input type="checkbox" checked={item.completed} onChange={()=>{
                setTasks(tasks.map((task) =>{
                  if(task.id == item.id){
                    task.completed = !task.completed
                  }
                  return task;
                }))
              }} />
              <button onClick={()=>{
                setTasks(
                  tasks.filter((tasks)=>{
                    if(tasks.id === item.id){
                      return false;
                    } else {
                      return true
                    }
                  })
                )
              }}>Delete</button>
              </li>;  // never use the index to iterate
          })}
        </ul>
      </main>
    </>
  )
}

export default App;
