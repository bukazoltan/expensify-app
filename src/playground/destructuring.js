/* const person = {
    name: "Andrew",
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
}

const { name: firstName = "Anonymus", age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (person.location.city && person.location.temp) {
    console.log(`It's ${temperature} in ${city}.`);
} */

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name: publisherName = "self-published" } = book.publisher;


console.log(publisherName);