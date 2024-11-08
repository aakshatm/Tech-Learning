// this keyword

// function sayMyName(name){
//     console.log(`My name is ${name}`)
// }

// sayMyName('Walter White')


//implicit binding 

const person = {
    name: 'Vishwas', 
    sayMyName: function() {
        console.log('my name is ' + this.name);
    }
}

person.sayMyName(); // this : person



// explicit binding

function sayMyName(){
    console.log(`My name is ${this.name}`)
}

sayMyName.call(person)
// call ke answer this = person set kar diya explicitly

// new binding 
// function Person(fname, lname){
//     // this = {}
//     this.fname = fname
//     this.lname = lname
// }

// const p1 = new Person('Bruce', 'Wayne');
// const p2 = new Person('Aakshat', 'Malhotra');


// console.log(p1);
// p1.getFullName = function() {
//     console.log(this.fname + this.lname)
//     return this.fname + this.lname; 
// }
// default binding 



// Person.prototype.getFullName = function() {
//     console.log(this.fname + this.lname)
//     return this.fname + this.lname; 
// }

// console.log(p1);
// console.log(p1.getFullName());
// prototype use is similar to static methods and static properties


class Person{
    constructor(fname, lname){
        this.fname = fname; 
        this.lname = lname; 
    }

    getFullName(){
        return this.fname + " " + this.lname;
    }
};

class SuperHero extends Person{
    constructor(fname, lname){
        super(fname, lname);
        this.isSuperHero = true; 
    }

    fight(){
        console.log('fighting')
    }
}

const h1 = new SuperHero('Bruce', 'Wayne')
console.log(h1.getFullName()) 
h1.fight()


