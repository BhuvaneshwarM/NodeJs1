//1.Demonstrate the use of AJV, validate the JSON which should have at least these keys:-
//name, age, email, subjects, cgpa.


var Ajv=require('ajv');
var ajv=new Ajv();

var student = {
    name: "test",
   age: 20,                    //For false output the age is omitted 
    email: "test@yopmail.com",
    subjects: ['A1', 'A2', 'B1', 'B2'],
    cgpa: 8
    };
var myJSON = JSON.stringify(student);//creating a JSON string from the object 

const schema={                   //Schema for checking the properties for validation. The object is validated with this ajv                                   
    "type":"object",
    "properties":{
        "name":{"type":"string",maxLength:10},
        "age":{"type":"number"},
        "email":{"type":"string","format":"email"},
        "subjects":{"type":"array","items":[{"type":"string"},{"type":"string"},{"type":"string"},{"type":"string"}]},
        "cgpa":{"type":"number",maximum:10,minimum:0}
    },
    "required": ["name","age","email","subjects","cgpa"]       //all properties needs to be present in the object 
}

  const isValid=ajv.validate(schema,JSON.parse(myJSON));  //JSON.parse() to convert from JSON string back to object

  console.log(isValid);   //If the object is valid return true , else false 
  