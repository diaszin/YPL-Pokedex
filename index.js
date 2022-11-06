const nomePokemon = document.getElementById("nomePokemon")
const adicionarBTN = document.getElementById("adicionar")


function AdicionarPokemonNaLista(pokemon) {

    dadosPokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then((response) => response.json())
        .then((data) => {
            //data["name"] nome do pokemon
            // data["sprites"]["front_defaullt"] imagem do pokemon
            // data["types"][numero]["type"]["name"] // nome do tipo

            tipos = [] // Guarda os tipos
            for (item in data["types"]) {
                tipos.push(data["types"][item]["type"]["name"])
            }
            console.log(data)

            CriarCartaDoPokemon(nome = data["name"], img = data["sprites"]["front_default"], tipo = tipos)
        })
        .catch((error) => {
            alert("Insira um nome válido !")
        })

}


function CriarCartaDoPokemon(nome = "ditto", img = "#", tipo = [], descricao = "", link_descricao = "#") {
    const listaPokemon = document.getElementById("lista-pokemons")

    var lista_tipos_html = "" // Variavel para cada tipo no tipo cirar uma lista html
    for (item in tipo) {
        lista_tipos_html += `<span class="pokemon-type-item">${tipo[item]}</span>\n`
    }

    listaPokemon.innerHTML += `
    <div class="pokemon-card" data-tipoprimario="${tipo[0]}">
        <img src="${img}" alt="Foto do Pokemon" class="pokemon-img">
        <h3 class="pokemon-name">${nome}</h3>
        <div class="pokemon-type-list">
            ${lista_tipos_html}
        </div>
        <a href="${link_descricao}"><button>Ver Descrição Completa</button></a>
    </div>
    `
    console.log("Pokemon Adicionado")
}
adicionarBTN.addEventListener("click", () => {
    var nomePokemonTXT = nomePokemon.value
    if (nomePokemonTXT.length > 2) {
        AdicionarPokemonNaLista(nomePokemonTXT.toLowerCase())
    }
    else {
        alert("Insira um nome !")
    }
})