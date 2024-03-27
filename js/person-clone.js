const Person = {
    firstName: 'John',
    lastName: 'Due',
    age: 32,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    greeting() {
        return `Welcome ${this.firstName}`
    }
}

const person1 = Object.create(Person);
const person2 = Object.create(Person);

person1.firstName = 'Jane';

console.log(person1.firstName);
console.log(person2.firstName);
