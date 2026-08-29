let todo = [];

while(true) {

    let req = prompt("Enter your request: add, remove, list, or quit");

    if(req === null){
        console.log("You have exited the program");
        break;
    }

    req = req.toLowerCase().trim();

    if(req === "quit") {
        console.log("You have exited the program");
        break;
    }

    else if(req === "list") {

        if(todo.length === 0) {
            console.log("Your todo list is empty");
            continue;
        }

        console.log("Your todo list:");

        for(let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
    }

    else if(req === "add") {

        let newTask = prompt("Enter the task you want to add");

        if(newTask === null) {
            console.log("Task not added");
            continue;
        }

        newTask = newTask.trim();

        if(newTask.length === 0) {
            console.log("Task cannot be empty");
            continue;
        }

        todo.push(newTask);

        console.log(`"${newTask}" has been added to your todo list`);
    }

    else if(req === "remove") {

        if(todo.length === 0) {
            console.log("Your todo list is empty");
            continue;
        }

        console.log("Your todo list:");
        for(let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }

        let index = prompt("Enter the index of the task to remove");

        if(index === null) {
            console.log("Task not removed");
            continue;
        }

        index = parseInt(index);

        if(isNaN(index) || index < 0 || index >= todo.length) {
            console.log("Invalid index");
            continue;
        }

        let removed = todo.splice(index, 1);
        console.log(`"${removed[0]}" has been removed from your todo list`);
    }

    else {
        console.log("Invalid request. Please enter: add, remove, list, or quit");
    }
}