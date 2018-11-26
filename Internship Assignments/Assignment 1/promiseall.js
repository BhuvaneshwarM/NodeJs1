//2].B) Demonstrate the use of Promise.all with the help of a function

var a=5,b=5; //two pairs of number are going to be compared such that if a is equal to b
//var c=7,d=7;//and if c is equal to d  (case for resolve)
var c=7,d=8;// case for rejection

var promise1= new Promise((resolve,reject) => {
if(a==b)   //pair two comparision
{
	resolve('pair 1 is equal');
}	
else
{
	reject('pairs not equal');
}
});
var promise2= new Promise((resolve,reject) => {
if(c==d)    //pair one comparision
{
	resolve('pair 2 is equal too!');
}	
else
{
	reject('pairs not equal');
}
});

Promise.all([promise1,promise2]).then(result=>{   // in this , only if both the promises are resolved it will return to then
	console.log(result);
})
.catch(result=>{      //if any one promise gets rejected , that will be returned here (or) the first instance of reject will be returned here
	console.log(result);  //
});