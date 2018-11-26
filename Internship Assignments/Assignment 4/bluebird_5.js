//5.Demonstrate the use of bluebird promises, like Promise.map, promisifying a npm package and its uses


//Promisifying npm package



var Promise = require("bluebird");
var fs = require("fs");
fs.readFile("./bluebird.txt", "utf8", function(err, data) {
  if (err) {
    console.log("error in reading file");
  } else {
    console.log(data);
  }
});
// This promisifying feature is used to convert a node module with call backs to a module which can return promises
//Promisses are better than call backs for making the code compact and readable
//Here we convert the file module such that it returns a promise .
var promisedFs = Promise.promisify(fs.readFile);
promisedFs("./bluebird.txt", "utf8")
  .then(data => {
    console.log("After promisifying:" + data);
  })
  .catch(data => {
    console.log("error while reading");
  });
//Usually , the fs module would not return a promise unless promisified
//=======================================================================================================================

//Promise.map



var a = 1,
  b = 1;
var c = 2,
  d = 2;
var promise1 = function() {
  return new Promise(function(resolve, reject) {
    if (a == b) {
      resolve("Promise 1 execution");
    } else {
      reject("a and b not equal");
    }
  });
};
var promise2 = function() {
  return new Promise(function(resolve, reject) {
    if (c == d) {
      resolve("promise 2 execution");
    } else {
      reject("c and d not equal");
    }
  });
};

var arrayOfPromises = [promise1, promise2];

Promise.map(arrayOfPromises, function(allCompare) {
  return allCompare();
})
  .then(result => {
    console.log("a=b and c=d");
  })
  .catch(result => {
    console.log("something not equal");
  });

//Promise.map is bettern in use in the place of promise.all
// It is used to check multiple promises in an array at once.
//Only if all the promise in the array resolves , the map promise resolves .
//here it is checked for if a==b and c==d at once using Promise.map

//Having a doubt in the order of ecexution which am hoping would be cleared during next session
