//4. Write a function to delete update Engineer details

module.exports={

  endDetails:function (engineer){

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

engineer.find({ where: { name: "engineer1" } }).complete(function(err, data) {
  //Deletion of engineer details ("Falcon")
  if (err) {
    console.log(err);
  } else {
    data.destroy().success(function(err, data) {});
  }
  console.log(data); //Data of table displayed as obejct
});
  }}