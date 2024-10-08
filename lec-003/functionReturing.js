"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name2: user.name, isPaid: user.isPaid };
}
console.log(createUser({ name: "string", isPaid: true }));
