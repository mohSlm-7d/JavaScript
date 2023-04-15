const num1 = 50;
const num2 = 50;

const sum = (x = 0, y = 0) => {
    const num_1 = x;
    const num_2 = y;

    return x+y
}

sum();
console.log(`num1: ${num1}, num2: ${num2}`)
try{
    console.log(`num_1: ${num_1}, num_2: ${num_2}`)
}catch(not_defined_blockScopedError){
    console.log(not_defined_blockScopedError)
    alert(not_defined_blockScopedError)
}


const particle={
    x : 100,
    y: 100
};

console.log(particle)

particle.y=200;
particle.error="you can manipulate the internal attributes of the object but you cannot change the reference variable which is (particle) here to referrnce another object or manipulate its value by any way.";

try{
    particle = {name:'amem', age:22, real_name:'Mohammad'}; 
}catch(you_cannot_re_assign_const){
    console.log(you_cannot_re_assign_const)
}finally{
    console.log(particle)
}

//document.getElementsByTagName('body')[0].addEventListener('click', ()=>document.getElementsByTagName('body')[0].style.backgroundColor="blue"); 

const firstNameFun = (name = prompt('Enter a full name')) => ()=>name.split(' ')[0]

//let first_name = firstNameFun(); // firstNameFun() here is a Higher-order function.
// Higher-order function (function(arrow function) that returns another function(also arrow))

//Any function that takes (input) or returns as an (output) or even defines a function inside it and returns it... is called a Higher-Order Function.

//first_name();

class Person{
    constructor(name, id, age, gender){
        this._name=name;
        this._id=id;
        this._age=age;
        this._gender=gender;
    }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get id(){
        return ()=>this._id;
    }
    get gender(){
        return this._gender;
    }

    
    set name(val){
        this._name= val;
    }
    set age(val){
        this._age = val;
    }
    set id(val){
        this._id = val;
    }
    set gender(val){
        this._gender = val;
    }
}
class Student extends Person{
    constructor(id, name, age, gender, specialization){
        super(name, id, age, gender);
        this.specialization = specialization;
    }

    getName = ()=> this.name;
    getAge(){
        return super.age;
    }
    get id(){
        const get_id = super.id;
        return get_id();
    }
    getGender = ()=> this.gender

    getSpecialization = ()=>this.specialization
}

let std = new Student(prompt('Enter your ID'), prompt('Enter your name'), prompt('Enter your age'), prompt('Enter your gender'), prompt('Enter your specialization'));

console.log(`Student name: ${std.getName()} \n ID: ${std.id}\nAge: ${std.getAge()}\nGender: ${std.getGender()}\n Specialization: ${std.getSpecialization()}`);

let m7md=firstNameFun(std.getName());
console.log(m7md());


const enumDays = Object.freeze({
    SUNDAY: "Sunday",
    MONDAY:"Monday",
    TUESDAY: "Tuesday",
    WEDNESDAY: "Wednesday",
    THURSDAY: "Thursday",
    FRIDAY: "Friday",
    SATURDAY: "Saturday"
})

let today = enumDAYS.SATURDAY;