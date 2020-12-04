// valores primitivos
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)



// valores de referência
let userOne = { name: 'Roger', age: 31 }
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 32

console.log(userOne, userTwo)
