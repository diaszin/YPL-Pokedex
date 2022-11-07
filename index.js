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
    const pokemonsLendarios = [
        "mewtwo", "articuno", "zapdos", "moltres", 
        "mew", "entei", "suicune", "raikou", "ho-oh",
        "lugia", "celebi", "regirock", "regice", "registeel", "regigigas",
        "latias", "latios", "groudos","kyogre", "rayquaza", "jirachi", "deoxys",
        "uxie", "mesprit","azelf", "dialga", "palkia", "giratina",
        "cresselia", "darkai", "manaphy", "phione", "heatran", "shaymin",
        "arceus", "victini", "cobalion", "terrakion", "virizion", "keldeo", "tornadus",
        "thundurus", "landorus", "zekrom", "reshiram", "kyurem", "meloetta", "genesect", 
        "xerneas", "yveltal", "zygarde", "diancie", "hoopa", "volcanion", "magearna"
]

    
    var lista_tipos_html = "" // Variavel para cada tipo no tipo cirar uma lista html
    link_descricao = `https://pokemon.fandom.com/pt-br/wiki/${nome[0].toUpperCase()+nome.substring(1)}`

    if(pokemonsLendarios.includes(nome.toLowerCase())){
        tipo.push("lendary")
        for (item in tipo) {
            lista_tipos_html += `<span class="pokemon-type-item">${tipo[item]}</span>\n`
        }

        listaPokemon.innerHTML += `
        <div class="pokemon-card lendary" data-tipoprimario="lendary">
            <img src="${img}" alt="Foto do Pokemon" class="pokemon-img">
            <h3 class="pokemon-name">${nome}</h3>
            <div class="pokemon-type-list">
                ${lista_tipos_html}
            </div>
            <a href="${link_descricao}"><button>Ver Descrição Completa</button></a>
        </div>
        `
    }
    else{

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

    }
    console.log("Pokemon Adicionado")
}

function VerificarSeOPokemonJaEstaNaLista(pokemon){
    const listaPokemon = document.getElementById("lista-pokemons")
    for(item of listaPokemon.children){
        console.log()
        if(pokemon === item.querySelector("h3").innerText.toLowerCase()){
            return false
        }
    }
    return true
}

adicionarBTN.addEventListener("click", () => {
    var nomePokemonTXT = nomePokemon.value
    if(nomePokemonTXT.toLowerCase() === "poze"){
        alert("Pra alcançar a tropa vai levar um tempo 🤑")
        alert("Pra alcançar a tropa vai levar um tempo 🤑")
        alert("Para com essa porra 🤬😡😡")
    }
    else{
        if(VerificarSeOPokemonJaEstaNaLista(nomePokemonTXT.toLowerCase()) == true){
            if (nomePokemonTXT.length > 2) {
                AdicionarPokemonNaLista(nomePokemonTXT.toLowerCase())
            }
            else {
                alert("Insira um nome !")
            }
        }
        else{
            alert("Esse pokemon já está na lista !!!")
        }
    }
    nomePokemon.value = ""
})