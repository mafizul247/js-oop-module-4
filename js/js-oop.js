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


Person.sayHi = function () {
    return 'Hi';
}

console.log(Person.sayHi());


console.log(Person.fullName())