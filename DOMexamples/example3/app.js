// jshint asi:true

const myList = document.getElementsByTagName('li')

for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = 'purple'
}

const errorNotPurple = document.querySelectorAll('.error-not-purple')

for (let i = 0; i < errorNotPurple.length; i++) {
  errorNotPurple[i].style.color = 'red'
}

const evens = document.querySelectorAll('li:nth-child(even)')

for (let i = 0; i < evens.length; i++) {
  evens[i].style.backgroundColor = 'lightgray'
}