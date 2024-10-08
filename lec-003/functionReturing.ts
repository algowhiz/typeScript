function createUser(user: { name: string; isPaid: boolean }): { name2: string; isPaid: boolean } {
    
    return { name2: user.name, isPaid: user.isPaid };
}

console.log(createUser({ name: "string", isPaid: true }));

export {};
