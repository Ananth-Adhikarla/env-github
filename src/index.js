import style from './styles.css'

console.log('Hello world! My name is Uche Azubuko.')

let container = document.getElementById('container')

let text1 = document.createElement('h3')
text1.textContent = process.env.SOME_IMPORTANT_API_KEY
container.appendChild(text1)
