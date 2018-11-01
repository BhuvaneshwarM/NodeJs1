//2. Write a function that prints details of all engineers working on project (search by project name)

var mysql = require("mysql2");
var Sequelize = require("sequelize");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "bhuvander",
  port: 3306
});
const sequelize = new Sequelize("mydb", "root", "bhuvander", {
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
  .authenticate()
  .then(function() {
    console.log("CONNECTED! ");
  })
  .catch(function(err) {
    console.log(err);
  })
  .done();

const engineer = sequelize.define("engineer", {
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING }
});
const Projects = sequelize.define("Projects", {
  projectName: { type: Sequelize.STRING }
});

//HERE 'TheProject' is the project that is going to be searched and the associated engineers are returned and displayed in the console
var id;
Projects.find({ where: { projectName: "TheProject" } }).complete(function(
  err,
  data
) {
  //console.log(data.id);
  id = data.id; //Corresponding project id obtained by querying

  engineer.findAll({ where: { ProjectId: id } }).complete(function(err, data) {
    // All engineers with the project id is queried and obtained
    for (let i = 0; i <= data.length - 1; i++) {
      console.log(data[i].name); //All engineers with the corresponding project id are printed
    }
  });
});
