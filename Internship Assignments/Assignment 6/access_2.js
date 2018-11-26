//2. Write a function that prints details of all engineers working on project (search by project name)
//HERE 'TheProject' is the project that is going to be searched and the associated engineers are returned and displayed in the console

module.exports={

access:function (Projects,engineer){Projects.find({ where: { projectName: "TheProject" } }).complete(function(
  err,
  data
) {
  //console.log(data.id);
  var id = data.id; //Corresponding project id obtained by querying

  engineer.findAll({ where: { ProjectId: id } }).complete(function(err, data) {
    // All engineers with the project id is queried and obtained
    for (let i = 0; i <= data.length - 1; i++) {
      console.log("Obtained data:"+data[i].name); //All engineers with the corresponding project id are printed
    }
  });
})
}
}
