//3.Show examples of use of splice method to add and remove elements from array.

let x;
let array = ["Hello world", 21, { property: "value" }, x, null, true]; // Here an array is created with all possible datatypes in javascript

for (let i = 0; i < array.length; i++) {
  console.log(array[i]); //Each element of the array with their datatype is printed along with their datatypes
  console.log(typeof array[i]);
  console.log("===========");
}
//Hence the output shows that all different types of data type elements can be stored in an array
