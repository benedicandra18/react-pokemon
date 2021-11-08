require('isomorphic-fetch')

const express = require('express')

function fetchGenIPokemons() {
  fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=160')
    .then(response => response.json())
    .then(function (pokemons) {
      pokemons.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon)
      })
    })
}

function fetchPokemonData(pokemon) {
  var species = []
  fetch('https://pokeapi.co/api/v2/generation/1/')
    .then(response => response.json())
    .then(data => data.pokemon_species
      .map(specieData => { return species.push(specieData.name) }))

  .then(fetch(pokemon.url)
    .then(res => res.json())
    .then(data => {
      if (species.includes(data.species.name)) {
        console.log(data.name)
        // pokemons.push(data.name)
      }
    })
  )
}

fetchGenIPokemons()

function fetchGenISpecies() {
  var species = []
  fetch('https://pokeapi.co/api/v2/generation/1/')
    .then(response => response.json())
    .then(data => data.pokemon_species
      .map(specieData => { return species.push(specieData.name) }))
    .then(() => { console.log(species.length) })
}
// 151 species
//fetchGenISpecies()



// var nrPokemons
// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(response => response.json())
//   .then(data => nrPokemons=data.count)
//   .then(()=>console.log(nrPokemons))

// fetch(`https://pokeapi.co/api/v2/pokemon/1`)
//   .then(res=>res.json())
//   .then(res=>console.log(res))

// var pokemons=[]
// async function getPokemons(){
// var x=[1,2,3]
//     x=x.map( async i=> {
//       await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//       .then(res=>res.json())
//       .then(res=> {
//       if(species2.includes(res.species.name)){
//        return pokemons.push(res.name)
//      }
//    })
//    .then(()=>console.log("lal",pokemons.length))
//     })

//   }

// getPokemons()

