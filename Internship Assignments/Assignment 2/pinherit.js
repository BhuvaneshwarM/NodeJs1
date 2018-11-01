//3].Demonstrate prototypical Inheritance
//Prototypical inheritance
//Here we can assign the prototype of an object to another and lets see what happens when we do that
const Vehicle={ Big:true, manpowered:false};

const Car={ Wheels:4, Engine:true, Fuel:"Petrol"};

const Carspecific={ Name:"BMW",model:"BW300",colour:"White"};

//here properties are seperated from each other by specific and a broader specs
//The [[prototype]] can be used here for a task by assigning __proto__of an object to another

Carspecific.__proto__=Car;

console.log(Carspecific.Wheels);
//when a property specified doesnt exist , it goes to its prototype(Car object)
 //and the property in the deifned prototype will be used
//This property can be used in a chain like way using multiple objects excepts loops cannot be formed 
Car.__proto__=Vehicle;
console.log(Carspecific.Big);                               