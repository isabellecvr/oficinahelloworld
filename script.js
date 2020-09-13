var titulo = document.querySelector("h2")
console.log(titulo)
input = document.querySelector("input")
console.log(input)
var button = document.querySelector("button")
console.log(button)

function cliquei(){
   event.preventDefault()
    titulo.innerText = input.value;
}
