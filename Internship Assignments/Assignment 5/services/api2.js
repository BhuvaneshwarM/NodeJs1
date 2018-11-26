var Ajv=require('ajv');
var ajv=new Ajv();

var jwt=require('jsonwebtoken');
module.exports={

    verify:function(tkn,ajvFlag)
    { 
       
        jwt.verify(tkn,"secretkey",function(err,data){ 
            if(!err){
                flag=1;
               
            }
            else{      
                
                flag=0;                                
                
               }
        }) 
        
        if(flag==1)
        {return 'Token received and successfully verified!';}

        else if(flag==0)
        {return 'Token mismatch!';}
    
    }

}