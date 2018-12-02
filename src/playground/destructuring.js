/* Object Destructuring */
const person = {
  name: "Madanraj Venkatesan",
  age: 30,
  location: {
    city: "Chennai",
    temp: 40
  }
};

//Instead of writing as person.location.city we can just use
//city by this Object Destructuring, even we can use a default value using = if it is
// undefined and give it a different variable name using :
const { city, temp: temperature = "90" } = person.location;
if (city && temperature) {
  console.log(`It is ${city} in ${temperature}.`);
}

const { name = "Anonymous", age } = person;
console.log(`${name} is ${age}.`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(publisherName);

/* Array Destructuring */
const address = ["14201 42ND AVE S", "Seattle", "Washington", "98168"];
const [street, currentCity, state, zip] = address;

//Skip Last Item
const [newStreet, newCity, newState] = address;

//Skip First Item
const [, myCity, myState] = address;

//Assigning Defaults
const [, myNewCity = "Chennai", myNewState] = address;
console.log(`You are in ${currentCity}, ${state}`);

//Another Example skipping middle item
const item = ["Coffee (Hot)", "$2.00", "$2.50", "$2.75"];
const [type, , mediumPrice] = item;
console.log(`A Medium ${type} costs ${mediumPrice}`);
