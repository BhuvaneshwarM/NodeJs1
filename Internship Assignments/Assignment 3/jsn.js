//5.Write a function that takes object as input and prints all keys and values in a valid JSON format

const ElonM = {
  Name: "Tesla",
  Colour: "red",
  Electric: true,
  petrol: false,
  Extra: "Autodriving features"
}; //this is the input object

function myfunc(
  obj //this function takes in the object ElonM as input
) {
  Jsonstr = JSON.stringify(obj); // this line is used to conver the object as a string hence json is used
  console.log(Jsonstr); //the input object is printed in JSON format
}

myfunc(ElonM); // the function is called here
