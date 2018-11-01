//3. Write a function to assign manager to a project

var mysql = require("mysql2"); //Using mysql database here
var Sequelize = require("sequelize"); //sequelize

var con = mysql.createConnection({
  //Creating a connection with the database
  host: "localhost",
  user: "root",
  password: "bhuvander",
  port: 3306
});
const sequelize = new Sequelize("mydb", "root", "bhuvander", {
  //Establishing a connection between this file and the database
  host: "localhost",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    handleDisconnects: true
  },
  dialect: "mysql"
});

var test = sequelize
  .authenticate() // Checking for the connection
  .then(function() {
    console.log("CONNECTED! ");
  })
  .catch(function(err) {
    console.log(err);
  })
  .done();

ManagerName = "Hari Kumar"; //Inputs given for the function
Project = "MyProject";

const Projects = sequelize.define("Projects", {
  projectName: { type: Sequelize.STRING }
});

const Managers = sequelize.define("Managers", {
  managerName: { type: Sequelize.STRING }
});
Managers.belongsTo(Projects);

Projects.find({ where: { projectName: "TheProject" } }).complete(function(
  err,
  data
) {
  //checks for the project for which the manager is to be assigned and returns the project id
  console.log(data.id);
  var id = data.id;
  Managers.sync().then(function() {
    return Managers.create({
      //Enters the manager with that obtained ID
      managerName: ManagerName,
      ProjectId: id
    });
  });
});
