var assert = require("assert");
var jwt = require("jsonwebtoken"); 

//==============================================UNIT TESTING=======================================


var a1 = require(".\\..\\Functions\\api1.js"); // requiring all the functions used in API seperately, for unit testing 
var a2 = require(".\\..\\Functions\\api2.js");
var a3 = require(".\\..\\Functions\\api3.js");
var a4 = require(".\\..\\Functions\\api4.js");
var a5 = require(".\\..\\Functions\\api5.js");

var ajv = 1;             //ajv testing enabled here by setting this variable to zero
console.log(
  "===============UNIT TESTING=================== \n  The data format testing using AJV can be enabled if wanted by setting ajv variable to 1 in unit testing file"
);
console.log("\nAJV is normally tested when the code is in main execution");

it("should return array of multiples if entered a number ", function() {  //API for giving multiples being tested
  var isValid = a3.multiple(5, ajv);//Input data
  assert.deepEqual(isValid, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);  //Output data verification
});

it("Entering username and password and obtaining the roken ", function() {  //token generation being checked here
  var isValid = a1.tokengen("Mohit", "secretkey", ajv);
  assert.deepEqual(
    jwt.verify(isValid, "secretkey", function(err, data) { //Correct key
      if (!err) {
        return true;
      } else {
        return false;
      }
    }),
    true
  );
  var isValid = a1.tokengen("Mohit", "sk", ajv);    //Wrong key
  assert.deepEqual(
    jwt.verify(isValid, "secretkey", function(err, data) {
      if (!err) {
        return true;
      } else {
        return false;
      }
    }),
    false
  );
});

it("Entering the toke here should give validation and wrong token will give a mismatch", function() { //Token validation being checked here
  var isValid = a2.verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1vaGl0IiwiaWF0IjoxNTQwODA1NDkxfQ.fyKIwZ1xxHNmKAGEv5y4wrSk1zNVfh-xPELORaiMGTM",
    ajv
  );
  assert.deepEqual(isValid, "Token received and successfully verified!");

  var isValid = a2.verify(
    "5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1vaGl0IiwiaWF0IjoxNTQwODA1NDkxfQ.fyKIwZ1xxHNmKAGEv5y4wrSk1zNVfh-xPELORaiMGTM",
    ajv
  );
  assert.deepEqual(isValid, "Token mismatch!");
});

it("should take a sentence as input and give alphabetic occurence as object ", function() {  //Api for alphabetic occurence and object of that
  var isValid = a4.occurence("aabbccddd", ajv);
  assert.deepEqual(isValid, { a: 2, b: 2, c: 2, d: 3 });
});

it("should take number as input and return Amstrong or not amstrong", function() { //API for amstrong number verification being checked
  var isValid = a5.armstr(371, ajv);
  assert.deepEqual(isValid, "Armstrong number");
  var isValid = a5.armstr(52, ajv);
  assert.deepEqual(isValid, "Not Armstrong number");
});

//==================================INTEGRATION TESTING AHEAD!!===============================
//All the testing below unlike unit testing , includes navigation through the webpages and querying hence covering all the lines of the code
//The testing as self explanatory with the "describe"

var request = require("supertest");
var app = require("C:/Users/Bhuvan/Desktop/Internship Assignments/Assignment 5/server.js");
ajv = 0;
describe("homepage", function() {  //Homepage
  it("It take you to the homepage with links for API", function(done) {
    request(app)
      .get("/")
      .expect(/Welcome to the home page./, done);
  });

  it("The first link to username and password", function(done) { //username password page
    request(app)
      .get("/api1")
      .expect(/Enter Username and password below/, done);
  });

  it("The link to generate a token with the given input", function(done) { //token generation page 
    request(app)
      .get("/api1?username=Mohit&password=secretkey")
      .expect(/Please copy the token for future verification/, done);
  });

  it("The link to generate a token with the given input", function(done) {  //Token entry page
    request(app)
      .get("/api2")
      .expect(/Enter the copied token below for verification/, done);
  });

  it("correct token", function(done) {   //correct token verification
    request(app)
      .get(
        "/api2?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1vaGl0IiwiaWF0IjoxNTQwNzQyMzM5fQ.t5Qlhta6HDy4rp5aoTDRc5JWezifZzr666-kAwujcv8&redirect=0"
      )
      .expect(/Token received and successfully verified!/, done);
  });

  it("Wrong token", function(done) {   //wrong token verification
    request(app)
      .get(
        "/api2?token=eyJhbGciOi0IiwiaWF0IjoxNTQwNzQyMzM5fQ.t5Qlhta6HDy4rp5aoTDRc5JWezifZzr666-kAwujcv8&redirect=0"
      )
      .expect(/Token mismatch!/, done);
  });

  it("The link to find first 10 multiples of given numbers", function(done) {  //API 3 page
    request(app)
      .get("/api3")
      .expect(
        / An api which takes number as input and return the first 10 multiple of the number entered below/,
        done
      );
  });
  it("Check for the multiples of input number with the passed query  ", function(done) {  //API 3 functionality verification
    request(app)
      .get("/api3?multi=50")
      .expect(/[50,100,150,200,250,300,350,400,450,500]/, done);
  });

  it("API4 test1:token acquiring page", function(done) {   //API 4 token validation checking 
    request(app)
      .get("/api?apn=4")
      .expect(/Found. Redirecting to /, done);
  });

  it("API4 test2:token page check", function(done) {
    request(app)
      .get("/api1")
      .expect(/Enter Username and password below/, done);
  });

  it("API4 test3:token entry and redirecting to the app", function(done) {
    request(app)
      .get("/api1?username=Mohit&password=secretkey")
      .expect(/Found. Redirecting to/, done);
  });
  it("API4 test4:wrong token verification", function(done) {
    request(app)
      .get("/api2?token=" + "5fQ.t5Qlhta6HDy4rp5aoTDRc5JWezifZzr666-kAwujcv8")
      .expect(
        /Failed , Start from home page to verify again for the requested api/,
        done
      );
  });
  it("API4 test4:correct token verification", function(done) {
    request(app)
      .get(
        "/api2?token=" +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1vaGl0IiwiaWF0IjoxNTQwNzQyMzM5fQ.t5Qlhta6HDy4rp5aoTDRc5JWezifZzr666-kAwujcv8&redirect=1"
      )
      .expect(/Found. Redirecting to /, done);
  });

  it("API4 test5:Inside the app", function(done) {  //API 4 Verification
    request(app)
      .get("/api/4")
      .expect(
        /An api which takes a sentence as input and return an object which has alphabet/,
        done
      );
  });
  it("API4 test5:The object from the app", function(done) {  
    request(app)
      .get("/api/4?textField=hello")
      .expect(/{"h":1,"e":1,"l":2,"o":1}/, done);
  });

  it("API5 test1:Entering the number in the app", function(done) {  //Amstrong number verification
                                                                    //Follows the same redirect as for API 3 , hence token validation is not tested
    request(app)
      .get("/api/5")
      .expect(
        /To find if a number is amstrong or not. NOTE:The number which is entered below is passed as query automatically/,
        done
      );
  });
  it("API5 test2:Obtaining the output (IF the number is not Amstrong)", function(done) { //API 4 functionality tested
    request(app)
      .get("/api/5?anum=65")
      .expect(/Not Armstrong number/, done);
  });
  it("API5 test3:Obtaining the output (IF the number is  Amstrong)", function(done) {
    request(app)
      .get("/api/5?anum=371")
      .expect(/Armstrong number/, done);
  });

  app.close();
});
//Atlast the code coverage is checked by NYC  shown in the console