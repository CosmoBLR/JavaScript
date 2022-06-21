// Объекты
const person = {
    name: 'Egor',
    age: 33,
    isProgrammer: true,
    languages: ['ru', 'en', 'by'],
    'complex key': 'Complex Value',
    ['key_' + (1+3)]: 'Computed Key', // key_4
    // фу-ция greet явл. методом, т.к. она находится в объекте person
    greet: function() {

    }
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log(this)
        console.info('Информация про человека по имени:', this.name)
    }
}

console.log(person.name)
const ageKey = 'age'
console.log(person[ageKey])
console.log(person['complex key'])
person.greet()

person.age++
person.Languages.push('de')
person['key_4'] =undefined
delete person['key_4'] // удаляем ключ
console.log(person)
console.log(person['key_4'])

const name = person.name
const age = person.age
const languages = person.languages
// !!!!! деструктуризация = 3 стрчки выше :) !!!!!
const {name, age: personAge, languages} = person
console.log(name, personAge, languages)

console.log(person)
// цикл for in опасен, т.к. он может зайти в прототип
for (let key in person) {
    if (person.hasOwnProperty(key)) { // проверка 
        console.log('key:', key)
        console.log('value:', person[key])
    }
}

Object/keys не бежит по прототипу, поэтому проверка не нужна
Object.keys(person).forEach((key) => {
    console.log('key:', key)
        console.log('value:', person[key])
})

// Контекст
person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },

    keysAndValues() {
        // 'key': value
        Object.keys(this).forEach (key => {
            console.log(`"${key}": ${this[key]}`)
        })
    },
    withParams(top = false, between = false, bottom= false) {
        if (top) {
            console.log('------- Start -------')
        }
        Object.keys(this).forEach ((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) {
                console.log('--------------')
            }
        })
        if (bottom) {
            console.log('------- End -------')
        }
    }
}

const bound = logger.keys.bind(person)
bound()
logger.keys.call(person)
logger.keysAndValues.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])

