//3.Demonstrate the use of JWT (both token creation and verification)

// JSON web tokens is a standard in transfer of tokens between two entities 
// means of claims to be transferred between two parties
//
var jwt=require('jsonwebtoken');

// A token is being created 
var token=jwt.sign({payload:"this is the payload"},"secretkey");//  Algorithm here is defaultHMAC SHA256

//This token generated will be sent to a channel from which the token will be received
//=================================================================================
//Let us assume that tokenReceived is the received token
var tokenReceived=token; //Assumption of reading the token from a channel

jwt.verify(tokenReceived,"secretkey",function(err,data){ // This feature of JWT is to verify the token received and hence ensuring if the payload should be accepted 
    if(!err){
        console.log('payload received!');          //if no error is thrown 
        console.log(data);
    }
      else{                                        //if there is an error or a secret key mismatch
          console.log("error or key mismatch");
      }
                                                   //the iat field in output indicates the time at which the token is issued which is used for expireat functions
})          