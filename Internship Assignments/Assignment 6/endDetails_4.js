//4. Write a function to delete update Engineer details

var mysql = require("mysql2");
var Sequelize = require("sequelize");

var con = mysql.createConnection({
  //creating connection
  host: "localhost",
  user: "root",
  password: "bhuvander",
  port: 3306
});

const sequelize = new Sequelize("mydb", "root", "bhuvander", {
  //establishing the connection
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

//Entering a data into the engineers list
const engineer = sequelize.define("engineer", {
  //creating models

  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING }
});

const Projects = sequelize.define("Projects", {
  //creating models
  projectName: { type: Sequelize.STRING }
});

engineer.belongsTo(Projects); //establishing relationship between models

var engineerDetail = [
  {
    name: "Falcon", //Engineering detail to be entered (INPUT)
    email: "@gmail.com",
    ProjectId: 2
  },
  {
    name: "Tony",
    email: "@gmail.com",
    ProjectId: 1
  }
];

engineer.sync().then(function() {
  return engineer.bulkCreate(engineerDetail); //Addition or Update of engineering details( 2 engineer "tony"and "falcon")
});

engineer.find({ where: { name: "Falcon" } }).complete(function(err, data) {
  //Deletion of engineer details ("Falcon")
  if (err) {
    console.log(err);
  } else {
    data.destroy({}).success(function(err, data) {});
  }
  console.log(data); //Data of table displayed as obejct
});
