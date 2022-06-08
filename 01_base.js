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

// 4 Типы данных
const isProgrammer = true
const name = 'Egor'
const age = 32
let x 
console.log(typeof isProgrammer)
console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(null)

// 5 Приоритет операций
const fullAge = 32
const birthYear = 1989
const currentYear = 2022

// > < >= <=
const isFullAge = currentYear - birthYear >= fullAge // 33>=32 => true
console.log(isFullAge)

// 6 Условные операторы
const courseStatus = 'fail' // ready, fail, pending
if (courseStatus === 'ready') {
    console.log('Курс уже готов и его можно проходить')
} else if (courseStatus === 'pending') {
    console.log('Курс пока находится в процессе разработки')
} else {
    console.log('Курс не получился')
}

const isReady = true
if (isReady === true) {
    console.log('Всё готово!')
}

// !!!!!!!!!! ЭТА ЗАПИСЬ РАВНА ЗАПИСИ 2 !!!!!!!!!!!
if (isReady) {
    console.log('Всё готово!')
} else {
    console.log('Всё не готово!')
}
// !!!!!!!!!! ЗАПИСЬ 2 !!!!!!!!!!!!!!!!
// Тернарное выражение
isReady ? console.log('Всё готово!') : console.log('Всё не готово!')

const num1 = 42 // number
const num2 = '42' // string
console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции
function calculateAge(year) {
    return 2022 - year
}

// console.log(calculateAge(1989))
// console.log(calculateAge(1990))
console.log(calculateAge(1991))

function logInfoAbout(name, year) {
    const age = calculateAge(year)

if (age > 0) {
    console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
} else {
    console.log ('Вообще-то это уже будующее!')
}
    

logInfoAbout ('Егор', 1989)
// logInfoAbout ('Юля', 1990)
// logInfoAbout ('Юля', 2023)

// 9 Массивы
const cars  = ['Мазда', 'Мерседес', 'Форд']
const cars = new Array('Мазда', 'Мерседес', 'Форд')
console.log(cars.length)

console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

cars[0] = 'Порше'
cars[cars.length]= 'Мазда'
console.log(cars)

// 10 Циклы
const cars  = ['Мазда', 'Мерседес', 'Форд', 'Порше']

for(let i = 0; i < cars.length; i++) {
    const car = cars[i]
    console.log(car)
}

for (let car of cars) {
    console.log(car)
}

// 11 Объекты (группируют определенные значения)
const person = {
    firstName: 'Egor',
    lastName: 'Kozlov',
    year: 1989,
    languages: ['Ru', 'En', 'De'],
    hasWife: true,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = false
person.isProgrammer = true
console.log(person)
person.greet()

