
//   1]. Print number 1 to 100 without using any loop. 

var t=setInterval(printit,0); //this command will execute printit function in the interval off time
var number=0; 
function printit(){
    if(number<=100)
	{
		
console.log(number++);	//each time the function is executed the number is incremented and printed on console log
	}	
	else
	{
		clearTimeout(t);//this will end the setInterval cycle once the number reached 100
	}
}