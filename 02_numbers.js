// 1 Number
const num = 42 // integer
const float = 42.42 // float
const pow = 10e3

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53', Math.pow(2, 53) - 1) // 2 в 53 степени и - 1
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('2 / 0', 2 / 0)

console.log(Number.NaN) // Not a Number (не число)
console.log(typeof NaN) // а по факту, число. каламбур :)
const weird = 2 / undefined // результат будет Nan
console.log(isNaN(weird)) // проверка что результат это Nan
console.log(Number.isNaN(42))

// проверка конечности чисел
console.log(Number.isFinite(Infinity)) // неконечно - false
console.log(Number.isFinite(42)) // конечно - true

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2) // приводим строку к int
console.log(parseInt(stringInt) + 2) // можно без Number
console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)

console.log(parseFloat(stringFloat) + 2) // вывод float
console.log(+stringFloat + 2) 

console.log(0.4 + 0.2) // очевидно что ответ 0,6 но 0.6000000000000001
console.log((4 / 10) + (2 / 10)) // 0.6000000000000001
console.log((0.4 + 0.2).toFixed(1)) // 0.6 но это строка
console.log(+(0.4 + 0.2).toFixed(1)) // 0.6 это int
console.log(parseFloat((0.4 + 0.2).toFixed(1))) // 0.6 это int


// 2 BigInt (*n - это тип BigInt)
console.log(900719925474099199999n - 90071992547409919999n)
console.log(-900719925474099199999n) // можно "-"
console.log(900719925474099199999.2323n) error, нельзя float

console.log(10n - 4) // error
console.log(parseInt(10n) - 4) // OK
console.log(10n - BigInt(4)) // OK
console.log(5n / 2n) // будет 2 т.к. это int только целые


// 3 Math
console.log(Math.E) // экспонента
console.log(Math.PI) // число Пи

console.log(Math.sqrt(25))
console.log(Math.pow(5, 3))
console.log(Math.abs(-42)) // убираем "-"
console.log(Math.max(42, 12, 23, 11, 500))
console.log(Math.min(42, 12, 23, 11, 500))
console.log(Math.floor(4.9)) // округление в меньшую сторону
console.log(Math.ceil(4.9)) // округление в большую сторону
console.log(Math.round(4.9)) // округление к ближайшему целому
console.log(Math.trunc(4.9)) // удаление всех дробных
console.log(Math.sin) // тригонометрия
console.log(Math.random()) // рандомное число

// 4 Example
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(getRandomBetween(10, 42))
