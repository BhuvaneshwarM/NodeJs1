//1.Write a program that takes a date and prints the day on which the date falls on.

//Method one
/*var stdin=process.openStdin();               
console.log("enter the date in YYYY-MM-DD format");
stdin.addListener("data",function(d)       //Getting the date as input in the given format 
{
    const day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];  //An array here to know the day
    var date=new Date(d);   
    console.log(day[date.getDay()]);//the output of getDate is used as index for day array hence the required day os obtained 
    process.stdin.destroy();
})*/

//method two
var moment = require("moment");
var stdin = process.openStdin();
stdin.addListener("data", function(d) {
  var date = new Date(d);
  console.log(moment().format("ddd"));
  process.stdin.destroy();
});
