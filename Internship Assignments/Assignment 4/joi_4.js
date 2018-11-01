//4..Demonstrate the use of JOI. validate the JSON which should have at least these keys:-
//name, age, email, subjects, cgpa


const Joi = require('joi');

const schema = Joi.object().keys({

    name: Joi.string().alphanum().min(3).max(15).required(),

    age: Joi.number().integer(),

    email: Joi.string().email({ minDomainAtoms: 2 }),

    subjects:Joi.array(), //[Joi.string(), Joi.string(),Joi.string(),Joi.string()],

    cgpa: Joi.number().integer().min(0)

}).and('name', 'age','email','subjects','cgpa'); //For all the keys to be present to validate

const student={   //Object to be verified
    name:'test',
    age:20,
    email:'asdf@gmail.com',
    subjects:['A1','A2','A3','A4'],
    cgpa:10
    };

    const result = Joi.validate(student, schema);    //JOI validation
    console.log(result);  