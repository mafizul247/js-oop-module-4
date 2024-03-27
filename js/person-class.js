class Person { 
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    greeting() {
        return `Welcome ${this.firstName}`;
    }
}

const John = new Person('John', 'Due', 'john@gmail.com');

export default John;