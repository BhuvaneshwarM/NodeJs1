/*1.Use sequelize to create the following database structure along with relations
Engineer
Project
Manager
	A project can have multiple Engineers
	Each project will have only one manager*/

//This file is to create a databast "mydb" and put in some values for starting other functionalities.
//IMPORTANT NOTE: This file is to be run two times for the tables to be properly created due to a probelm with foreign key verification
//which didnt allow to write data to child tables for the first time.
//Studying more about database and will clear this issue soon
var mysql = require("mysql2");
var Sequelize = require("sequelize");

var con = mysql.createConnection({
  // creating connection with the database
  host: "localhost",
  user: "root",
  password: "bhuvander",
  port: 3306
});

con.query("CREATE DATABASE mydb", function(err, result) {
  // To create a new database , but while executing the code for second time , this should be omitted
  if (err) throw err;
  console.log("Database created");
});

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
    console.log(err);
  })
  .done();

const engineer = sequelize.define("engineer", {
  //Defining models , Engineer model
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING }
});

const Projects = sequelize.define("Projects", {
  //defining projects model
  projectName: { type: Sequelize.STRING }
});

const Managers = sequelize.define("Managers", {
  //defining manager model
  managerName: { type: Sequelize.STRING }
});

//Establishin relationship between models

//Each manager has one project. This can be done by maintining non repeating projectId(parent key) for the managers
Managers.belongsTo(Projects);

//Many engineers belong to one project . this can be done by allowing many engineer to mave same ProjectId
engineer.belongsTo(Projects);

Projects.sync().then(function() {
  //Creating the project table with one sample data
  return Projects.create({
    projectName: "TheProject"
  });
});

engineer.sync().then(function() {
  //Creating the engineer table with two datas
  return engineer.bulkCreate([
    {
      name: "engineer1", //key value pairs
      email: "@gmail.com",
      ProjectId: 1
    },
    {
      name: "engineer1",
      email: "@gmail.com",
      ProjectId: 2
    }
  ]);
});

Managers.sync().then(function() {
  //crating manager table
  return Managers.create({
    managerName: "TheManager",
    ProjectId: 2
  });
});

sequelize.query("show tables").then(function(columns) {
  //Displaying the table contents as object
  console.log(`******* ${JSON.stringify(columns)} ******************`);
});

//All functionalities are made in different files which should be run seperately to function after creating the database
