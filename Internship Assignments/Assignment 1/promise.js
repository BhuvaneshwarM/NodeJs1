//2].A] Demonstrate the use of Promise with the help of a function

var a=5,b=5;   //two numbers up for being compared to check if they are equal (for resolve)

var promise1= new Promise((resolve,reject) => {  //this is the promise func
	if(a==b)
{
	resolve('a and b are equal');   //if equal
}	
else
{
	reject('a and b are not equal');   //if not equal
}
});

promise1.then(msg=>    //the promise function will be replace at this then part when it is resolved
{
	console.log(msg);  
})
.catch(msg=>     //when rejected , the promise function will return here
{
console.log(msg);
});


var c=6,d=7; //case for rejection
var promise1= new Promise((resolve,reject) => {  //this is the promise func
	if(c==d)
{
	resolve('c and d are equal');   //if equal
}	
else
{
	reject('c and d are not equal');   //if not equal
}
});

promise1.then(msg=>    //the promise function will be replace at this then part when it is resolved
{
	console.log(msg);  
})
.catch(msg=>     //when rejected , the promise function will return here
{
console.log(msg);
});