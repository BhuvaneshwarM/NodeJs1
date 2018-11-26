//5. Write a function to delete project

module.exports={

  deleteProj:function (Projects,engineer,Managers){

Projectname = "TheProject"; //Input

//To delete project,  first the associated child details are to be deleted (engineers and managers associated in this case)

Projects.find({ where: { projectName:"TheProject" } }).complete(function(
  err,
  data
) {
  //console.log(data)
 var id = data.id;
  engineer.find({ where: { ProjectId: id } }).complete(function(err, data) {
    //Deletion of engineer details (child)
    if (err) {
      console.log(err);
    } else {
      data.destroy().success(function(err, data) {});
    }
  });

  Managers.find({ where: { ProjectId: id } }).complete(function(err, data) {
    //Deletion of manager details (child)
    if (err) {
      console.log(err);
    } else {
      data.destroy().success(function(err, data) {}); //Delets the data
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
  }}