//2.Show examples of use of splice method to add and remove elements from array.

let array = ["red", "blue", "yellow", "green", "black"];

console.log(
  "the original array is---------------------------------------->" + array
);

array.splice(1, 1); // First argument specifies the index at which the element of array must be removed

console.log(
  "After the second element is removed ------------------------->" + array
);

array.splice(0, 3); //second argument specifies the number of element to be removed consequtively from the beginning index

console.log(
  "first three consequtive elements removed--------------------->" + array
);

array.splice(0, 1, "brown", "green"); //more than second arguments specifies the elements to be replaced with the ones that are to be removed

console.log(
  "first element is removed and replaced by other element------->" + array
);
