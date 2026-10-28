// primitive

// 7 types:String, number, Boolean, null, undefined, Symbol, Bigint

//Reference Type/ Non-Primitive

// Array, Objects, Functions

const heros=["shakti", "naagraj", "doga"];

let myobj={
    name:"Harsh",
    age: 22,
}

const myfun=function() {
    console.log("hello world");
}

// console.log(heros)
// console.log(myobj);
// myfun();

// console.log(typeof heros);
// console.log(typeof myobj);
// console.log(typeof myfun);

// ****************** stack (primitive), Heap (Non-Primitive) ***************

let fname="Harsh"

let lname=fname;
lname= "Barge"

// console.log(lname);
// console.log(fname);


let user={
    email:"user@google.com",
    upi: "user@ybl"
}

let usertwo=user

usertwo.upi="user@hdfc"

console.log(user);
console.log(usertwo);


