const post = {
    username : "johndoe123",
    content : "This is the content of my first post.",
    author : "John Doe",
    date : "2023-06-15",
    likes : 100,
    tags : ["programming", "javascript", "webdev"],
    reports : 5,
    isPublished : true,

    address : {
        city : "New York",
        state : "NY",
    }
}

console.log(post.username); // Output: johndoe123
console.log(post["content"]); // Output: This is the content of my first post.
// 
console.log(post.address.city); // Output: New York


post.author = "Jane Smith"; // Updating the author property

obj.newone = "New Property"; // Adding a new property to the object