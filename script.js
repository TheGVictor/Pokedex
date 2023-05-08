const reload = document.querySelector('.title')
const main = document.querySelector('.pokemonName')
const img = document.querySelector('.pokemonImage')
const area = document.querySelector('.pokemonArea')
const btBack = document.querySelector('.back')
const btFront = document.querySelector('.front')
const element = document.querySelector('.pokemonElement')
const search = document.querySelector('.foundPokemon')
const glass = document.querySelector('.glass')
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const ability = document.querySelector('.ability')
const m1 = document.querySelector('.m1')
const m2 = document.querySelector('.m2')
const m3 = document.querySelector('.m3')
const xp = document.querySelector('.xp')


//requisição HTTP
const searchPokemon = async (pokemon) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

//Function para renderização
const render = async (pokemon) => {
    const data = await searchPokemon(pokemon)

    main.innerHTML = data.name
    img.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    element.innerHTML = data['types']['0']['type'].name
    height.innerHTML = data.height/10
    weight.innerHTML = data.weight
    ability.innerHTML = data['abilities']['0']['ability'].name
    m1.innerHTML = data['moves']['0']['move'].name
    m2.innerHTML = data['moves']['1']['move'].name
    m3.innerHTML = data['moves']['2']['move'].name
    xp.innerHTML = data.base_experience

    //Definição dos elementos
    if(data['types']['0']['type'].name === "bug") {
        element.classList.add('bugElement')
    }else {
        element.classList.remove('bugElement')
    }

    if(data['types']['0']['type'].name === "grass") {
        element.classList.add('grassElement')
    }else {
        element.classList.remove('grassElement')
    }

    if(data['types']['0']['type'].name === "electric") {
        element.classList.add('electricElement')
    }else {
        element.classList.remove('electricElement')
    }

    if(data['types']['0']['type'].name === "water") {
        element.classList.add('waterElement')
    }else {
        element.classList.remove('waterElement')
    }

    if(data['types']['0']['type'].name === "fire") {
        element.classList.add('fireElement')
    }else {
        element.classList.remove('fireElement')
    }
    
    if(data['types']['0']['type'].name === "ghost") {
        element.classList.add('ghostElement')
    }else {
        element.classList.remove('ghostElement')
    }

    if(data['types']['0']['type'].name === "poison") {
        element.classList.add('poisonElement')
    }else {
        element.classList.remove('poisonElement')
    }

    if(data['types']['0']['type'].name === "rock") {
        element.classList.add('rockElement')
    }else {
        element.classList.remove('rockElement')
    }


    //Evento dos botões frente e verso
    btBack.addEventListener('click', (pokemon) => {
        img.src = data['sprites']['versions']['generation-v']['black-white']['animated']['back_default']
        btBack.classList.add('selected')
        btFront.classList.remove('selected')

    })

    btFront.addEventListener('click', () =>{
        img.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        btFront.classList.add('selected')
        btBack.classList.remove('selected')
    })

}


//barra de pesquisa
search.addEventListener('keypress', (e) => {

    if(e.key === "Enter"){
    let res = search.value.toLowerCase()
    render(res)
    btFront.classList.add('selected')
    btBack.classList.remove('selected')
    }
})

glass.addEventListener('click', () => {
    let res = search.value.toLowerCase()
    render(res)
    btFront.classList.add('selected')
    btBack.classList.remove('selected')
})

//Reload na página
reload.addEventListener('click', () => {
    document.location.reload(true)
})

render('1')