'use strict';
import users from './users'
console.log(users)
// Objects
// Generator
const Tank = (ammo = 100, armor = 100) => ({ammo, armor});
const tank1 = Tank();
const tank2 = Tank(50,50);
console.log(tank1);
console.log(tank2);

// Constructor function - works in context of newly created object
const Car = function(power = 150, fuel = 400) {
    this.power = power;
    this.fuel = fuel;
    this.switch = function () {}
}
const car1 = new Car();
const car2 = new Car(10, 10);
console.log(car1);
console.log(car2);

// Class
class Box {
    constructor(width = 100, height = 100) {
        this.width = width;
        this.height = height;
    }
    static count = 0
    static increment () {
        this.count += 1;
    }
    unpack () {}
}
const box1 = new Box();
console.log(box1);

// Inheritance
// Prototype inheritance
const Plane = {
    speed: 1000,
    alt: 10000
}
const interceptor = {
    rockets: 10,
    __proto__: Plane
}

// Class inheritance
class User {
    constructor(name, company) {
        this._name = name;
        this._company = company
    }
    set name (name) {
        this._name = name
    }
    get name () {
        return this._name
    }
}
class Admin extends User {
    constructor(name, company, system = 'Linux') {
        super(name, company);
        this.system = system;
    }
}
const admin = new Admin('John Doe', 'Microcorp inc.');
console.log(admin);

// Object methods
const obj = {
    ammo: 10,
    fire () {
        this.ammo --;
    }
};
obj.fire();

// Useful functions

// Serialization to JSON
const jsonTank = JSON.stringify(tank1); // create JSON from Object
const parsedJsonTank = JSON.parse(jsonTank); // create Object from JSON
console.log(parsedJsonTank);

// Keys and values
Object.keys(tank1) // Array of object keys
Object.values(tank1) // Array of object values
Object.entries(tank1) // Array of arrays [key, value]

// Deep copy, merging
const a = {foo: 'bar'};
const b = {bar: 'foo'};
const c = Object.assign({}, a, b);
const copied = Object.assign({}, c);
console.log(c);
console.log(copied);

// spread operator
const copy = {...copied, ...tank1}; // equivalent to {foo: 'bar', bar: 'foo', ammo: 100, armor: 100}
console.log(copy)

// Array methods
const arr = [6,10,7,4,5,6];
const filtered = arr.filter(el => el===6);
console.log(filtered);
const mapped = arr.map(el => el**2);
console.log(mapped);
const reduced = arr.reduce((acc, el) => {
    acc.push({ammo: el})
    return acc
}, []);
console.log(reduced);
arr.every(el => el>0);
arr.some(el => el>0);
// str.includes(substr) - finds if substring is presented in string
