

let user = {
    name: "vasya",
    age: 20,
    role: "Admin",
    occupation: undefined,
}

console.log(user.age > 18 && user.name !== undefined) // 1.Операция, 
//которая вернет true, если сть имя пользователя определенно и ему больше 18.

console.log(user.role ==="Admin" && user.occupation === "СЕО") // 2. false, если не "Admin" и не "CEO";

console.log(user.occupation ?? user.role) // 3. 

console.log((user.role === "Admin" && user.age > 18) && user.name !== undefined) // 4.

console.log((user.name !== undefined && user.role !== "admin") && user.age) // 5. НЕ МОГУ РЕШИТЬ!!