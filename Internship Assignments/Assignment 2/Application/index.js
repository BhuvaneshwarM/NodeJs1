
/*6] . Create a small application that prints the second argument variable.
(Create this application using the proper node style, explore about npm init and use above discussed topic if possible)

The Application folder structure should be like this

Index.js (execution file)

Controller (folder)
  |
  Index.js
  Related controller file

Service (folder)
   |
   Index.js
   Related service file	
   */

var arguments=process.argv; // Here , the arguments of the command line is taken into account
 console.log("The second command line argument is:");// The second argument is printed 
console.log(arguments[1]);