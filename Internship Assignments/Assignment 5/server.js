const express = require("express");
var jwt = require("jsonwebtoken");//jwt for token handling

const app = express();
const port = 3000;
var redir = 0;  //This variable is to keep track of the redirecting status(If the program is going thrugh a redirect or not)
var flag = 0;  //Status of the validated token(if correct or not)
var apiNo;  //Just for the last two API , used as in the case of the token validation
var globalTkn;
const ajv = 1; //This variable is used to toggle of there should be AJV validation carried out during execution or during unit testing

app.get("/", function(req, res) {     // this route is for the homepage of the application calls the html from vies directory
  res.sendfile("./views/homepage.html");
}); // Homepage for the server app
//========================================================================

app.get("/api1", function(req, res) {       //Route to page to get username and password
  res.sendfile("./views/login.html");
  var usern = req.query.username;
  var passw = req.query.password;                     //Both are obtained as querry  
  if (usern != undefined && passw != undefined) {
    var a1 = require("./Functions/api1.js");            //Function required for token generation
    if (redir == 0) {                                   //This is to check if the complier is redirected here or not
      res.send(
        "Please copy the token for future verification" +
          "\n \n" +
          a1.tokengen(usern, passw, ajv)                //Username and password are used to generate the token 
      );
    }
    if (redir == 1) {                     //If we are redirected here , it means some app is requiring token verification and we are in the midst of it
      globalTkn = a1.tokengen(usern, passw, ajv);   
      res.redirect("./api2?token=" + globalTkn + "&redirect=" + redir); //the generated token is put as a query and redirected to token validation route
    }
  }
});

//=========================================================================
//This route function is used to validate the incoming token through the query 
app.get("/api2", function(req, res) {
  res.sendfile("./views/verify.html");  //calling the token verification page
  var token = req.query.token;     //Read the token from the query in the URL

  r = req.query.redirect;//This is redirect status received from the integration test(Included because of an error in redir status variable)

  if (token != undefined) {          
    var a2 = require("./Functions/api2");   //Function for the token verification required
    if (a2.verify(token, ajv) == "Token received and successfully verified!") {   //Token verificationS
      flag = 1;
    } else {
      flag = 0;
    }

    if (redir == 1 || r == 1) {      //If redirected from token generation(for last two API) the token is automatically validated and redirected to the API page
      if (flag == 1) {
        redir = 0;
        res.redirect("/api/" + apiNo);
      } else {
        redir = 0;
        res.send(
          "Failed , Start from home page to verify again for the requested api"
        );
      }
    } else if (redir == 0) {   //If not redirected , just display if the token is validate or not
      res.send(a2.verify(token, ajv));
    }
  }
});

//============================================================================
app.get("/api3", function(req, res) {    //This API route is for displaying first 10 multiples of the input number through a number field
  res.sendfile("./views/multiples.html");
  var number1 = req.query.multi;
  if (number1 != undefined) {
    var a3 = require("./Functions/api3.js");
    res.send(a3.multiple(number1, ajv));
  }
});
//==============================================================================
//This route is the redirecting Hub for the last two api( Used to redirect for token validation)
app.get("/api", function(req, res) {
  apiNo = req.query.apn;
  redir = 1;  //Setting redirect status to one 
  res.redirect("./api1"); //Redirect to the token generation and validation
});

//===============================================================================
app.get("/api/4", function(req, res) {    //(This API route if to find the alphabet and its occurence and output it as an object)
                                           // 4th api of character occurence .Redirected here after token validation
  res.sendfile("./views/occurence.html");  
  var text = req.query.textField;
  if (text != undefined) {
    console.log(text);
    var a4 = require("./Functions/api4.js");
    res.send(a4.occurence(text, ajv));
  }
});
//=====================================================================================

app.get("/api/5", function(req, res) {     // For api 5 of finding if the given number is amstrong or not 
  res.sendfile("./views/amstrong.html");   //redirected here after token validation
  var number = req.query.anum;
  if (number != undefined) {
    var a5 = require("./Functions/api5.js");
    res.send(a5.armstr(number, ajv));
  }
});

//console.log(app.listen(port,() => console.log('App is listening to the port 3000')));
module.exports = app.listen(port, () =>          //Make the server listen in the port 3000
  console.log("App is listening to the port 3000")
);
