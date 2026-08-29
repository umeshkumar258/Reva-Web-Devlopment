let obj = {
    name: "John",
    age: 30,

    greet: function(){
        console.log("Hello, " + this.name);
        console.log("Age: " + this.age);
    }
}

obj.greet(); // Output: Hello, John
              //         Age: 30

console.log(typeof obj.name); // Output: string
console.log(typeof obj.age);  // Output: number

obj[2] = "Hello"; 
obj.Hello = "World"; 

console.log(obj);

obj.cgpa = 8.5; // Adding a new property with a string key



delete obj.age; // Deleting the 'age' property

console.log(obj);