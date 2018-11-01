/*1].The code is to demonstrate  different ways of creating an object

1)using Object literal
2)using contructor
3)using keyword new
4)using keyword create
5)using class 
*/

//Lets create 3 objects with three different cases
//===================================================================

const obj1={Name:'Bhuvan',
          Age:21,
          Id:15013};//Object literal method


console.log(obj1.Name);
console.log(obj1.Age);
console.log(obj1.Id);
console.log("===================");
//====================================================================

const obj2=new Object();//Using javascript keyword
obj2.Name='Dinesh';
obj2.Age=21;
obj2.Id=21321;

          
console.log(obj2.Name);
console.log(obj2.Age);
console.log(obj2.Id);
console.log("===================");
//====================================================================

function personinfo()//using a constructor
{
  this.Name='Ajay';
  this.Age=24;
  this.Id=21122;  
}
const obj3=new personinfo();

console.log(obj3.Name);
console.log(obj3.Age);
console.log(obj3.Id);
console.log("===================");
//=====================================================================

const obj4=Object.create(Object.prototype,{   // with create keyword , passing prototype as argument
    Name:{value:'Mohit'}, //properties such as writable and enumarable can also be defined 
    Age:{value:28}, 
    Id:{value:4542} 
});

console.log(obj4.Name);
console.log(obj4.Age);
console.log(obj4.Id);
console.log("===================");
//=======================================================================

class personalId{                 //creating objects using class 
   constructor(name,age,id)
    {
        this.Name=name;
        this.Age=age;
        this.Id=id;
    }
}
const obj5=new personalId('Kumar',26,34343);


console.log(obj5.Name);
console.log(obj5.Age);
console.log(obj5.Id);
console.log("===================");



