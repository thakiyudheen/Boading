// Define an object
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        state: 'NY'
    }
};

// Freeze the object to make it immutable
Object.freeze(person);

person.kerala ='is this'

const {name,address:{city}}=person
console.log(city);