var a = require(".\\..\\services");

var redir = 0; //This variable is to keep track of the redirecting status(If the program is going thrugh a redirect or not)
var flag = 0; //Status of the validated token(if correct or not)
var apiNo; //Just for the last two API , used as in the case of the token validation
var globalTkn;
const ajv = 1;

module.exports = {
  homepage: function(req, res) {
    // this route is for the homepage of the application calls the html from vies directory
    res.sendfile("./views/homepage.html");
  },

  api1: function(req, res) {
    res.sendfile("./views/login.html");
    var usern = req.query.username;
    var passw = req.query.password; //Both are obtained as querry
    if (usern != undefined && passw != undefined) {
      //var a1 = require(".\\..\\Functions/api1.js");            //Function required for token generation
      if (redir == 0) {
        //This is to check if the complier is redirected here or not
        res.send(
          "Please copy the token for future verification" +
            "\n \n" +
            a.api1F.tokengen(usern, passw, ajv) //Username and password are used to generate the token
        );
      }
      if (redir == 1) {
        //If we are redirected here , it means some app is requiring token verification and we are in the midst of it
        globalTkn = a.api1F.tokengen(usern, passw, ajv);
        res.redirect("./api2?token=" + globalTkn + "&redirect=" + redir); //the generated token is put as a query and redirected to token validation route
      }
    }
  },

  api2: function(req, res) {
    res.sendfile("./views/verify.html"); //calling the token verification page
    var token = req.query.token; //Read the token from the query in the URL

    r = req.query.redirect; //This is redirect status received from the integration test(Included because of an error in redir status variable)

    if (token != undefined) {
      //var a2 = require("./Functions/api2");   //Function for the token verification required
      if (
        a.api2F.verify(token, ajv) ==
        "Token received and successfully verified!"
      ) {
        //Token verificationS
        flag = 1;
      } else {
        flag = 0;
      }

      if (redir == 1 || r == 1) {
        //If redirected from token generation(for last two API) the token is automatically validated and redirected to the API page
        if (flag == 1) {
          redir = 0;
          res.redirect("/api/" + apiNo);
        } else {
          redir = 0;
          res.send(
            "Failed , Start from home page to verify again for the requested api"
          );
        }
      } else if (redir == 0) {
        //If not redirected , just display if the token is validate or not
        res.send(a.api2F.verify(token, ajv));
      }
    }
  },

  api3: function(req, res) {
    res.sendfile("./views/multiples.html");
    var number1 = req.query.multi;
    if (number1 != undefined) {
      //var a3 = require("./Functions/api3.js");
      res.send(a.api3F.multiple(number1, ajv));
    }
  },

  api4: function(req, res) {
    res.sendfile("./views/occurence.html");
    var text = req.query.textField;
    if (text != undefined) {
      console.log(text);
      //var a4 = require("./Functions/api4.js");
      res.send(a.api4F.occurence(text, ajv));
    }
  },

  api5: function(req, res) {
    res.sendfile("./views/amstrong.html"); //redirected here after token validation
    var number = req.query.anum;
    if (number != undefined) {
      //var a5 = require("./Functions/api5.js");
      res.send(a.api5F.armstr(number, ajv));
    }
  },

  api: function(req, res) {
    apiNo = req.query.apn;
    redir = 1; //Setting redirect status to one
    res.redirect("./api1"); //Redirect to the token generation and validation
  }
};
