//  Работа с DOM-дерево ("Document Object Model")

// window.alert('1')
// window.prompt('Как тебя зовут?')
// window.setInterval()

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] старый метод
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#sub-hello') // Возвращает всегда 1 элемент (1-ый)


// console.dir(heading2)
const heading3 = heading2.nextElementSibling // следующий элемент за heanding2
const h2List = document.querySelectorAll('h2')
// console.log(h2List)
// const heading3 = h2List[h2List.length - 1]
// console.log(heading3)


// console.dir(heading.id)
// console.dir(heading.textContent)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})

