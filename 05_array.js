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


