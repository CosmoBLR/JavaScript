String
const name = 'Егор'
const age = 33

function getAge() {
    return age
}

const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' года.'
const output = `Привет, меня зовут ${name} и мой возраст ${age} года.` // вместо ${age} можно написать сразу функцию ${getAge()}
const output = `Привет, меня зовут ${name} и мой возраст ${age < 40 ? 'A' : 'B'} года.`
const output = `
<div>This is DIV</div>
<p>this is p</p>
`

console.log(output)

const Name = 'Егор'
console.log(Name.length) // метод .length показывающий кол-во символов
console.log(Name.toUpperCase()) // все символы в верхний регистр
console.log(Name.toLocaleLowerCase()) // все символы в нижний регистр
console.log(Name.charAt(0)) // какой символ на этой позиции
console.log(Name.indexOf('гор')) // поиск позиции определенных символов
console.log(Name.toLocaleLowerCase().startsWith('ег')) // стартует ли строка с определенных символов
console.log(Name.endsWith('ор')) // оканчивается ли строка с определ. символами
console.log(Name.repeat(3)) // повторение строчки n-раз
const string = '    password     '
console.log(string.trim()) // очистка пробелов
console.log(string.trimLeft()) // очистка пробелов слева
console.log(string.trimRight()) // очистка пробелов справа

function logPerson(s, name, age) {
    if (age < 0) {
        age  ='Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Егор'
const personName2 = 'Максим'
const personAge = 33
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)
