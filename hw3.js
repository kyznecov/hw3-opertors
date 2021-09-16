

const user = {
    name: "vasya",
    age: 20,
    role: "Admin",
    occupation: undefined,
}

console.log(user.age > 18 && user.name !== undefined) // 1. Правильно

console.log(user.role ==="Admin" && user.occupation === "СЕО") // 2. Правильно

console.log(user.occupation ?? user.role) // 3. Правильно

console.log((user.role === "Admin" && user.age > 18) ?? user.name !== undefined) // 4.Исправил 

console.log((user.name !== undefined && user.role !== "admin") && user.age) // 5. НЕ МОГУ РЕШИТЬ!! -> Оказалось правильно:)