// example of Array with strings and numbers
const myArray = ["Banana", 2, "Orange", 3, 1, 8];

// Nested arrays (or multidimensional array)
const teams = [["Bulls", 23], ["White Sox", 45]];

const myNestedArray = [["001", 250], ["002", 114], ["003", 356]];

// Array indexes
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];


// Nested sub array
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];

  // Another  example

  const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1]; // 8
  
/*

MANIPULATION OF ARRAYS

push() - insert a value into the end of the array
pop() - remove a value from the end of the array
shift() - remove a value from the begining of the array
unshift() - insert a value in the begining of the array

*/

  // push()  
  const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// pop()
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// shift()
const myArray = [["John", 23], ["dog", 3]];
myArray.shift(); // = ["dog", 3]]

// unshift()
myArray.unshift(["Paul", 35]); // = [["Paul", 35], ["dog", 3]]  