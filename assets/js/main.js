const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const firstGeneration = document.getElementById('firstGeneration')
const secondGeneration = document.getElementById('secondGeneration')
const thirdGeneration = document.getElementById('thirdGeneration')
const paginationText = document.getElementById('paginationText')



let maxRecords = 386
const limit = 20
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadMoreButton.addEventListener('click', () => {
    offset += limit
    let qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

firstGeneration.addEventListener('click', () => {
    maxRecords = 151
    offset = 0
    loadPokemonItens(offset, limit)
    navigation()
})

secondGeneration.addEventListener('click', () => {
    maxRecords = 251
    offset = 151
    loadPokemonItens(offset, limit)
    navigation()
})

thirdGeneration.addEventListener('click', () => {
    maxRecords = 386
    offset = 251
    loadPokemonItens(offset, limit)
    navigation()
})
