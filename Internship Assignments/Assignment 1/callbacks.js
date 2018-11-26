//4]. Demonstrate the use of callback, i.e both error and success.

var a=20;//the type of the variable if about to be printed 

//to explain the callback function , if the type of variable is not defined the it is made to show an error message

function type(var1,callf) //function is passes as parameter callf
{
	if(typeof(var1)=='undefined')//Error 
	{
		callf('Error! the variable is undefined',null); //Error status is sent
		
	}
	else{
		callf(null,'the type of variable is '+typeof(var1));//the type of the variable a is printed
	}
}
var a=5;
type(a,function(error,result){ 
if(error)
{
console.log(error);
}
else{
console.log(result);
}
});	