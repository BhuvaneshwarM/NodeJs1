//3]. Use fs package to read data from a file and print it, using callback way.


var fs=require('fs'); //fs library is included
//textfile.txt is going to be read and the contents are going to be printed in console log

fs.readFile('textfile.txt','utf8',function(error,data){ //this is the callback function used as anonymous function 
	if(error)
	{
		console.log("error opening the file");
	}
	else
	{
	console.log(data);
	}
});




	