// Массивы
const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const fib = [1, 1, 2, 3, 5, 8, 13, '21', true,] // можно хранить разные типы данных
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    {name: 'Egor', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

// Функция
function addItemToEnd() {

}
// Метод (т.к. применяется к объекту cars) push добавляет элемент в конец нашего массива
cars.push('Рено')
cars.unshift('Волга') // добавляем в начало массива элемент

const firstCar = cars.shift() // удаление 1го элемента
const lastCar = cars.pop() // удаление последнего элемента
console.log(firstCar)
console.log(lastCar)
console.log(cars)

console.log(cars.reverse()) // метод зеркального отображения массива
console.log(cars)

const index = cars.indexOf('БМВ') // поиск индекса в массиве
cars[index] = 'Порше'
console.log(cars)

let findPerson
for (const person of people) {
    if(person.budget === 3500) {
        findPerson = person
    }
}
console.log(findPerson)

const index = people.findIndex(function(person){
return person.budget === 3500
}) // поиск индекса если у нас ОБЪЕКТ в массиве
const person = people.find(function(person){
    return person.budget === 3500
})

const person = people.find(person => person.budget === 3500)
console.log(person)

console.log(cars.includes('Мазда')) // наличие какого-либо элемента в массиве

const upperCaseCars = cars.map(car => {
    return car.toUpperCase() // приведение к верхнему регистру
})

const pow2 = num => num ** 2
sqrt = num => Math.sqrt(num)

const pow2Fib = fib.map(pow2).map(sqrt)
console.log(pow2Fib)

const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2) // метод преобразования данных
const filteredNumbers = pow2Fib.filter(num => num > 20) // метод фильтрации данных
console.log(pow2Fib)
console.log(filteredNumbers)



Задача 1
const text = 'Привет, мы изучаем JavaScript'
// .split перевод строчки в массив, .join перевод массива в строчку
const reverseText = text.split('').reverse().join('')
console.log(reverseText)

const people = [
    {name: 'Egor', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

// people.reduce(function(acc, person) {}, 0) 
const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0) // одно и тоже

console.log(allBudget)
