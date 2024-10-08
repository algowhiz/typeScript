type User = {
    readonly _id:String 
    name:String,
    email:String,
    isActive:true,
}

let myUser : User = {
    _id:"Dont touch this",
    name:"mandy",
    email:"mandy@gmail.com",
    isActive:true,
}

console.log(myUser);

// myUser._id="update _id";
myUser.name="sandy";

console.log(myUser);

export {}
