const arr = [0, 1, 2, 3, 4, 5, 6, 7, 10, 13, 15];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i] * 2);
}

console.log(newArr);

function foreach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

[1, 2, 3].forEach((items) => {});

const arr = ["Hello", "class", "good", "morning"];

foreach(arr, (items) => {
  console.log(items);
});
