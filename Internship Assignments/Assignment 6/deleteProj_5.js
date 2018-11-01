//5. Write a function to delete project

var mysql = require("mysql2");
var Sequelize = require("sequelize");

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
  dialect: "mysql" //choose anyone between them
});

const Projects = sequelize.define("Projects", {
  //Creating the models
  projectName: { type: Sequelize.STRING }
});

const Managers = sequelize.define("Managers", {
  managerName: { type: Sequelize.STRING }
});

const engineer = sequelize.define("engineer", {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING }
});

Managers.belongsTo(Projects); //Model relationsip establishment
engineer.belongsTo(Projects);

Projectname = "TheProject"; //Input

//To delete project,  first the associated child details are to be deleted (engineers and managers associated in this case)

Projects.find({ where: { projectName: Projectname } }).complete(function(
  err,
  data
) {
  id = data.id;
  engineer.find({ where: { ProjectId: id } }).complete(function(err, data) {
    //Deletion of engineer details (child)
    if (err) {
      console.log(err);
    } else {
      data.destroy({}).success(function(err, data) {});
    }
  });

  Managers.find({ where: { ProjectId: id } }).complete(function(err, data) {
    //Deletion of manager details (child)
    if (err) {
      console.log(err);
    } else {
      data.destroy({}).success(function(err, data) {}); //Delets the data
    }
  });
});

Projects.find({ where: { projectName: Projectname } }).complete(function(
  err,
  data
) {
  //Deletion of Project details (parent)
  if (err) {
    console.log(err);
  } else {
    data.destroy({}).success(function(err, data) {});
  }
  //console.log(data);
});
