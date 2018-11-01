//5]Demonstrate the use of module.exports/exports/require

//Program to demonstrate require and export functions

//exports.name="Bhuvaneshwar";   //this line is an instance of the module.exports object. They both does the same
                                 //the same function here
                                 //they export the data to modules the require this module

module.export={        //this block will be ignored as only the last export block will export the values
    name:"Dinesh"
}
                                  
module.exports={      //Here an object can be sent to the required file 
 name:"Bhuvaneshwar"
}

require('./module2.js'); // module2 file is required here and any export statement will not be taken into account

module.export={   //this block wont be executed because the module 2 is required here which in turn requires partially loaded module one 
    name:"Pradheepa"
}
