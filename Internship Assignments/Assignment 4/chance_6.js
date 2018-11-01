// 6.Demonstrate the use of chance, your system should always return a object where values for its keys are random.
//Object should have at least these keys name, age, email, subjects, cgpa.

var Chance=require('chance');  //Chance library used for the generation of random values 
var chance=new Chance();//Object created

let obj={

    name:chance.name(),  //This will generate a random name 
 
    age:chance.age(),  //This will generate a random plausible range

    email:chance.email(),  //This will generate a random email

    subjects:[chance.string({ length: 5 }),chance.string({ length: 5 }),chance.string({ length: 5 }),chance.string({ length: 5 })],
    //Five random strings were created in the place of subjects

    cgpa:chance.integer({ min: 0, max: 10 }) //Generated an integer inbetween 0 to 10 as in cgpa

}

console.log(obj);