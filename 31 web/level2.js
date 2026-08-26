const user = {
    name: 'John Doe',

    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

user.greet(); // Output: Hello, John Doe

const user = {
    name: "Umesh",
    age: 19
};

const { name, age } = user;

console.log(name);
console.log(age);

const user = {
    name: "Umesh",
    age: 19
};

const updatedUser = {
    ...user,
    age: 20
};

console.log(updatedUser);