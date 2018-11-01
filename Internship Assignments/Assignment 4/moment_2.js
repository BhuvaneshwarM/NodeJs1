/*2. Demonstrate the use of Moment. Your system should accept a date as input 
and validate whether the date is between your system defined date range. 
If it is present than return true otherwise false. Apart from this the system should tell the user, 
input date is near to which date 
of the system defined range and the difference between those date(s) in ms.*/

var moment=require('moment');
var stdin=process.openStdin();
var start="2018-10-10";   //Starting date of the range 
var end="2018-10-15";     //ending date of the range
var startDate=moment(start,"YYYY-MM-DD").valueOf();   //start date converted to ms
var endDate=moment(end,"YYYY-MM-DD").valueOf();       //end date to ms

console.log("enter the date in YYYY-MM-DD format");
stdin.addListener("data",function(d)           //input 
{
    var date=moment(d,"YYYY-MM-DD").valueOf();    //input date to ms
    var result={}   //Object declaration
    if(date>=startDate && date<=endDate)   //range checking 
    {
        result.inBetween=true;
    }
    else{
        result.inBetween=false;
    }
    if(Math.abs(endDate-date)<Math.abs(date-startDate))    //Nearest date checking 
    {
      result.nearDate=end;
      result.difference=Math.abs(endDate-date);
    }
    else{
        result.nearDate=start;
        result.difference=Math.abs(startDate-date);
    }
 
    console.log(result);  //result 
    process.stdin.destroy();
});
