// Use Object.entries and for…of loop to print property and it’s value
let user = {
    name: 'Arnav',
    location: 'nashik',
    hobbies: ['code', 'read'],
    age: undefined
}

for (const [key, val] of Object.entries(user)) {
    console.log(key, val);
}