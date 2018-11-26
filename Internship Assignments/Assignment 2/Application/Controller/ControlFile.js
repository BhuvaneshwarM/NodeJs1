let service = require(".\\..\\Service");

let arguments = process.argv; // Here , the arguments of the command line is taken into account

console.log("The second argument variable is");
console.log(service.serviceF.secArg(arguments));
