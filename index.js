import Principal from "./functions.js"

const nomePokemon = document.getElementById("nomePokemon")
const adicionarBTN = document.getElementById("adicionar")


adicionarBTN.addEventListener("click", () => {
    Principal()
})

nomePokemon.addEventListener("keyup", (event) => {
    if (event.key == "Enter"){
        Principal()
    }
})