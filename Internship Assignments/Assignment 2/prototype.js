
//2].Demonstrate the use of prototype.
function bike(name,colour)// In this constructor , the bikespecs function is a property of constructor
{
   this.Name=name;
   this.Colour=colour;
   this.bikespecs=function(){
    return "The "+this.Name+" bike is "+this.Colour+" in colour.";
   }
   this.wheels=2;//Bike obviously has two wheels and hence need not be said for all instance of object
}

const bikeobj1=new bike("Honda","black");// whenever an instance of object is created , a space is allocated for bikespecs
const bikeobj2=new bike("FZ","green");//But here bikespecs does the same function hence not efficient to allocate twice
console.log(bikeobj1.bikespecs());
console.log(bikeobj2.bikespecs());

//Here , prototype comes into picture
//=============================================================================================
function car(name,colour)
{
   this.Name=name;
   this.Colour=colour;
   
}

car.prototype.wheels=4;//this common property of car is inherited by all the object from this contructor
car.prototype.carspecs=function(){ //Here the carspecs is given as prototype of the car constructor hence inherited by all instance of object
    return "The "+this.Name+" car is "+this.Colour+" in colour";
};

const carobj1=new car("BMW","Blue");
const carobj2=new car("Audi","White");
console.log(carobj1.carspecs());
console.log(carobj2.carspecs());

//Hence prototype is used
