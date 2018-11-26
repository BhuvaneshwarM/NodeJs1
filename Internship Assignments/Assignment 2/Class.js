
//2].Demonstrate Class and its functionality.(super/constructor/get/set/static)
//Javascript is not fully Object oriented
//class in java script can be said as a neater way of coding prototype


class students              //variable students that references the function constructor
{

    constructor(name)         
    {                                 //methods listed are put inside as prototypes 
        this.name=name;             //set is invoked
        this.age=25;
    }
    set name(name)
    {
         this.uppername=name.toUpperCase();  //uppername variable is assigned with uppercase of name
    }
    get name()
    {
        return 334;      //the uppercased name is returned to the name property
    }

    static info(){
        console.log("This is a text from static function"); //static functions are excluded from prototyping hence they are functions of class only
    }
}

var obj=new students("bhuvan");

obj.name="bhuvan";
console.log(obj.name); 
console.log(obj.age); 

students.info(); // this line calls the static function of the students class

//====================================================
class newname extends students{
constructor(namechange)
{
    super(namechange);     //super calls the constructor of the parent class hence making this.name as rohit
}                          //should always be used before any this statements

}
const obj1=new newname('Rohit');
console.log(obj1.name);


