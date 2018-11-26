//3. Write a function to assign manager to a project

module.exports={

  addproj:function (Projects,Managers){
    ManagerName = "Hari Kumar"; //Inputs given for the function
Project = "MyProject2";
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
  }}