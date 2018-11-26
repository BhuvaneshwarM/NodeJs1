var Ajv=require('ajv');
var ajv=new Ajv();

var jwt=require('jsonwebtoken');
module.exports={
     
    tokengen:function(user,pass,ajvFlag)
    {
      var token= jwt.sign({username:user},pass);//Generates a token according to username and password
      console.log(ajvFlag);
      if(ajvFlag==1)
      {
      const schema={
        "type": "string",
        "minLength": 10
       }
      const test=ajv.compile(schema);
      const isValid=test(token);
      console.log("===========AJV=================\nAPI 1 is active(token generation)");
      console.log("The generated token is valid : "+isValid)
      console.log("\n==================================");
     }
      return token 
  }

}