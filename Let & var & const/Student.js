export default class Student{
    constructor(name, id, age, gender, passed_hrs, specialization){
        this.name = name;
        this.id = id;
        this.age = age;
        this.gender = gender;
        this.passed_hrs = passed_hrs;
        this.specialization = specialization;
    }


    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getGender(){
        return this.gender;
    }
    getPassed_hrs(){
        return this.passed_hrs;
    }
    getSpecialization(){
        return this.specialization;
    }
}