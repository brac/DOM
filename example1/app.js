// jshint asi:true
const myHeading   = document.getElementById('myHeading')
const myButton    = document.getElementById('myButton')
const myTextInput = document.getElementById('myTextInput')
const resetButton = document.getElementById('resetButton')

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value
})

resetButton.addEventListener('click', () => {
  myHeading.style.color = 'black'
})


