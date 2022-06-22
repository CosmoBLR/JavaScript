// Асинхронность (скролл в ВК, нажатие любой кнопки) 
// концепт Event Loop

const timeout = setTimeout(() => {
    console.log('After timeout')
}, 2500)
clearTimeout(timeout)

const interval = setInterval(() => {
    console.log('After timeout')
}, 1000)
clearInterval(interval)

const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
}
delay(() => {
    console.log('After 2 seconds')
}, 2000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject('Что-то пошло не так. Повторите попытку')
        }, wait)
    })
    return promise
}

