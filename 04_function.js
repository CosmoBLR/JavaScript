// 1 Функции

// Function Declaration более надежный (можем вызывать к фун-ции когда захотим)
function greet(name) {
    console.log( 'Привет - ', name)
}

// Function Expression (можем обращаться к функции только после того, когда мы ее создали)
const greet2 = function greet2(name) {
    console.log( 'Привет 2 - ', name)
}
greet('Лена') // вызываем функцию
greet2('Лена')

console.log(typeof greet)
console.dir(greet) // метод просмотра внутринностей

// 2 Анонимные функции

// setInterval задаёт интервал
let counter = 0
const interval = setInterval(function() {
    if (counter === 10) {
        clearInterval(interval) // очищаем interval
    } else {
        console.log(++counter)
    }
}, 1000)

// 3 Стрелочные функции
function greet(name) {
    console.log( 'Привет - ', name)
}

const arrow = (name, age) => {
    console.log( 'Привет - ', name, age)
}

const arrow2 = name =>  console.log( 'Привет - ', name)
// arrow2("Egor")

const pow2 = num => {
    return num ** 2 // возводим num в степень 2
}
console.log(pow2(5))
