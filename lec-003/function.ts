// function addOne(num:number):number {
//     return num+1;
//     // return "hello";
// }

// const res:number = addOne(3);

// console.log(res);

// let signup = (name:string,email:string,isPaid:boolean=true) =>{
//     console.log(name);
//     console.log(email);
//     console.log(isPaid);    
// }

// signup("name","name@gmail.com",false);


const heros = ["IRON-MAN","THOR","SPIDY"];

heros.map((hero,idx):string =>{
    return `hero ${idx} is ${hero}\n`;
})



export {};