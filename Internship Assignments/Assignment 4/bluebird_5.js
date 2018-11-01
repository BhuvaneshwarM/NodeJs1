//5.Demonstrate the use of bluebird promises, like Promise.map, promisifying a npm package and its uses

var Promise=require("bluebird");
//Promisifying npm packages
Promise.promisifyAll(require("moment"));
//This is used to convert promise unaware API to promise returning API

Promise.delay(1)    //Long stack traces helps in preventing cycles ,dont leak memory
    .delay(1)         //The error shown in the output can be observed 
    .delay(1).then(function() {
        a.b.c;
    });

//Promise.map is bettern in use in the place of promise.all
