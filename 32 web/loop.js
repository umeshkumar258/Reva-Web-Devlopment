// let n  = 3;

// for(let i = 1;i<= n ;i++){
//     console.log(i*2);   
// }

// console.log("**********");
// let arr = [1, 2, 3, 4, 5];

// for(let i = 0;i<arr.length;i++){

//     arr[i] = arr[i]*2;

//     console.log(arr[i]);    
// }

// for(let i  = 1;i<= 4;i++){
//     for(let j = 1;j<= 4;j++){
//         console.log(i*j);
//     }
// }

// for(let i  = 5;i> 1;i--){
//     console.log(i);
// }

let row = 5;
for(let i = 1;i<= row;i++){
    let line = "";
    for(let j = 1;j<= i;j++){
        line += "*";
    }
    console.log(line);
}

for(let i = 1;i<= row;i++){
    let line = "";
    for(let j = 1;j<= i;j++){
        line += "*";
    }
    console.log(line);
}

let fav = "iron man";

let user;

while(!user || user.toLowerCase() !== fav){
    user = prompt("Enter your fav superhero");

    if(user.toLowerCase() === fav){
        console.log("You are correct");
        break;
    }else{
        console.log("Try again");
    }
}
