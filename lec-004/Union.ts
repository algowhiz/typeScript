// let Score: number | string | boolean = 33;

// console.log(typeof Score);


// Score = "33";

// console.log(typeof Score);

// Score=false;

// console.log(typeof Score);

// type user = {
//     userName :String,
//     role:String,
// }

// type admin = {
//     adminName :String,
//     role:String,
// }

// let mandy : user | admin = {userName:"mandy",role:"user"}
// mandy  = {adminName:"mandy",role:"admin"}

// console.log(mandy);


let arr1 : number[] = [12,22,33];
let arr2 : String[]  = ["12","22","33"];
let arr3 : number[] | String[] = [12,22,33];
let arr4 : (number | String)[] = [12,22,"33"];

arr3 = ["s1","s2","s3"];




export {}