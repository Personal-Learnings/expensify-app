//ES6 Classes
class Person {
  //ES6 Constuctor
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    //ES6 Template String
    return `Hello ${this.name} !`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// ES6 Subclasses
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) description += ` Their Major is ${this.major}.`;
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation)
      greeting += ` I'm visiting from ${this.homeLocation}`;
    return greeting;
  }
}

// Instance of the Class
const me = new Student("Madanraj Venkatesan", 30, "Computer Science");
console.log(me.getDescription());

const me1 = new Student();
console.log(me1.getDescription());

const me2 = new Traveler("Madanraj Venkatesan", 30, "Seattle");
console.log(me2.getGreeting());

const me3 = new Traveler();
console.log(me3.getGreeting());
