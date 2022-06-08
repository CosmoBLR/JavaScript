// 1 Переменные

// variable, var - стараемся не использовать!
// предпочтительней использовать const, если не менять переменную
// firstName - называется camelCase

const firstName = 'Egor' // string
const age = 32 // number
const isProgrammer = true // boolean

// age = 'some string' ДАЖЕ можно и так :)
name = 'Dima'
lastName = 'Eg'
age = 50
// просмотр в консоли (удобная вещь)
console.log(age)
const _ = 'private'
const $ = 'some value'
// const if = 'make' // error
const withNum5 = '5'
// const 5withNum = '5' // err

// 2 Мутирование 
// '+' конкетинирование (соединение различных строк)
console.log('Имя человека: ' + firstName + ', в возраст человека: ' + age)
alert('Имя человека: ' + firstName + ', в возраст человека: ' + age)

const lastName = prompt('Введите фамилию')
alert(firstName + ' ' + lastName)

// 3 Операторы
let currentYear = 2022
const birthYear = 1989
const myAge = currentYear - birthYear
console.log(myAge)

const a = 10
const b = 5

let c = 32
c = c + a
c = c - a
c = c * a
c = c / a
// c += a
// c -=a
// c *=a
// c /=a

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(currentYear++)
console.log(--currentYear)
console.log(c)

