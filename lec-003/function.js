"use strict";
// function addOne(num:number):number {
//     return num+1;
//     // return "hello";
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const res:number = addOne(3);
// console.log(res);
// let signup = (name:string,email:string,isPaid:boolean=true) =>{
//     console.log(name);
//     console.log(email);
//     console.log(isPaid);    
// }
// signup("name","name@gmail.com",false);
var heros = ["IRON-MAN", "THOR", "SPIDY"];

const res =  heros.map(function (hero, idx) {
    return "hero ".concat(idx, " is ");
});

console.log(res);

