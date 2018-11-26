//5.Write a function that takes object as input and prints all keys and values in a valid JSON format

const ElonM = {
  Name: "Tesla",
  Colour: "red",
  Electric: true,
  petrol: false,
  Extra: "Autodriving features"
}; //this is the input object

function myfunc(
  obj //this function takes in the object ElonM as input
) {
  Jsonstr = JSON.stringify(obj); // this line is used to conver the object as a string hence json is used
  console.log(Jsonstr); //the input object is printed in JSON format
}
 
var str="{";
function myfunc1(obj)     //Converting object to string without using stringify 
{ 
  for(let key in ElonM)
  {

    if(ElonM[key]==true || ElonM[key]==false)
    {
      str=str+'"'+key+'"'+':'+ElonM[key]+','
    }else
    {
    str=str+'"'+key+'"'+':'+'"'+ElonM[key]+'"'+','
    }
  }
  str = str.substring(0, str.length - 1); 
  str+="}" 
  console.log(str)

}

myfunc(ElonM);  //The function which doesn't use JSON.stringify 
myfunc1(ElonM); // the function is called here(uses stringify)
