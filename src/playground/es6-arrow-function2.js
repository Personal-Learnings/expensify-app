// aruguments object - no longer bound with arrow functions
//Regular Function
const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

//Arrow Function
const addArrow = (a, b) => {
  //console.log(arguments); This wont work while using Arrow Functions
  return a + b;
};

console.log(add(5, 3));

// this keyword - no longer bound

const person = {
  name: "Madanraj Venkatesan",
  age: 53,
  dependents: ["Jayashree Thirunavukarasu", "Yashika Madanraj Jayashree"],
  displayName: function() {
    // or displayName() {
    console.log(this.name);
    console.log(this.age);
    // this.dependents.forEach(function(x) {
    //   console.log("Name: " + x + " Primary Holder Name: " + this.name); Here this will not work inside the foreach context so we may have to use Arraw Function Here
    // });
    this.dependents.forEach(x => {
      console.log("Name: " + x + " Primary Holder Name: " + this.name); // This will work, but when you make displayName as Arrow this wont work
    });
  }
};

person.displayName();

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiply: function(value) {
    return this.numbers.map(number => {
      return number * value;
    });
  }
};

//or simplifying the map further

const multiplier1 = {
  numbers: [1, 2, 3, 4, 5],
  multiply(value) {
    return this.numbers.map(number => number * value);
  }
};

console.log(multiplier.multiply(10));
