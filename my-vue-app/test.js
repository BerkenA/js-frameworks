// const arr = [1,2,3];

// arr.push(4)

// const newArr = [arr, 4] // [[1,2,3],4]
// const spreadArr = [...arr, 4] // [1,2,3,4]
// console.log(arr)

const items = ["Eat breakfast", "Drink coffee", "Drink redbull"];

const newItems = [...items, "Shower"];

const lastId = items[items.length - 1].id; // items-length-1 to find the last item in the array

function deleteFromArray(arr, id) {
  const newArr = arr.filter((item) => {
    if (item.id === id) {
      return false;
    } else {
      return true;
    }
  });
  return newArr;
}

const newItems = deleteFromArray(items, 1);
