/*1.Use sequelize to create the following database structure along with relations
Engineer
Project
Manager
	A project can have multiple Engineers
	Each project will have only one manager*/

//This file is to create a databast "mydb" 


var mysql = require("mysql2");
var Sequelize = require("sequelize");
var stdin=process.openStdin();
var con = mysql.createConnection({
  // creating connection with the database
  host: "localhost",
  user: "root",
  password: "bhuvander",
  port: 3306
});

con.query( "DROP DATABASE mydb", function(err, result) { //Clearing the db to create a new one
if(err || !err)
{
con.query("CREATE DATABASE mydb", function(err, result) {
  // To create a new database , but while executing the code for second time , this should be omitted
  if (err) 
  {//throw err;
  console.log("error creating database")
}
else{
  console.log("Database created");
  const sequelize = new Sequelize("mydb", "root", "bhuvander", {
    //connecting the databse with this file
    host: "localhost",
    port: 3306,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      handleDisconnects: true
    },
    dialect: "mysql" //choose anyone between them
  });
  
  var test = sequelize //Checking if the databse is connected
    .authenticate()
    .then(function() {
      console.log("CONNECTED! ");
    })
    .catch(function(err) {
      console.log("error connecting to database");
    })
    .done();
  
  const engineer = sequelize.define("engineer", {//Defining models , Engineer model
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
  });
  
  const Projects = sequelize.define("Projects", {//defining projects model
    projectName: { type: Sequelize.STRING }
  });
  
  const Managers = sequelize.define("Managers", {//defining manager model
    managerName: { type: Sequelize.STRING }
  });
  
  Managers.belongsTo(Projects);//Establishing relationship between models
  engineer.belongsTo(Projects);
  

  //Creating tables and performing functions 
  Managers.sync().then(function() {

    Projects.sync().then(function() {
      
      engineer.sync().then(function() {//Creating the engineer table with two datas
        return engineer.bulkCreate([
          {
            name: "engineer1", //key value pairs
            email: "@gmail.com",
            ProjectId: 1
          },
          {
            name: "engineer2",
            email: "@gmail.com",
            ProjectId: 2
          }
        ]);
      }).then(()=>{console.log("done with models")
      sequelize.query("show tables").then(function(columns) {

       console.log(`******* ${JSON.stringify(columns)} ******************`);  //Displaying the table contents as object
        
       
       console.log(" 1.prints details of all engineers of a Project \n 2.Assign manager to a project \n 3.Delete and update Engineer \n 4.Delete a project \n Enter the options")
       
        stdin.addListener("data",function(option){
           if(option==1){console.log("op1")
           var func=require('./access_2')
           func.access(Projects,engineer);
          }
           if(option==2){
            console.log("op2")
            var func=require('./addproj_3')
            func.addproj(Projects,Managers);
           }
           if(option==3){
            console.log("op3")
            var func=require('./endDetails_4')
            func.endDetails(engineer);
           }
           if(option==4){
            console.log("op4")
            var func=require('./deleteProj_5')
            func.deleteProj(Projects,engineer,Managers);

           }

        })
      });
    });
      return Projects.bulkCreate([{
        projectName: "TheProject"
      },{
        projectName: "TheProject2"
      }]);
  
      
    });
     return Managers.create({
      managerName: "TheManager",
      ProjectId: 1
    });
  });
  
  
  
}
});
}
})



