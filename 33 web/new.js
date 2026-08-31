const stu = {
    name : 'John',
    age : 20,
    eng : 88,
    math : 90,
    kan : 95,
    getTotal() {
        return this.eng + this.math + this.kan;
    }
}

const total = stu.getTotal();
console.log(`Total score of ${stu.name} is ${total}`);


try {
    console.groupCollapsed("Student Details");
    console.log(`Name: ${stu.name}`);
    console.log(`Age: ${stu.age}`);
    console.log(`English: ${stu.eng}`);
    console.log(`Math: ${stu.math}`);
    console.log(`Kannada: ${stu.kan}`);
}
catch (error) {
    console.error("An error occurred while logging student details:", error);
}

