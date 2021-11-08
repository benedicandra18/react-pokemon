import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setPokemons } from '../redux/actions/pokemonActions'
import PokemonComponentList from './PokemonComponentList'
import { Container } from '../styles/Container.style'

function PokemonList() {
    const pokemons = useSelector(state => state.pokemons.pokemons)
    const dispatch = useDispatch();

    const fetchPokemons = async () => {
        const response = await axios
            .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=160')
            .catch(err => console.log(err))

        let promises=[]

        response.data.results.forEach((pokemon)=>{
            promises.push(axios.get(pokemon.url)
            .then(({data})=>(data)))
        }) 
        const pokemons = await axios.all(promises)      
        dispatch(setPokemons(pokemons))
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    console.log(pokemons)

    return (
        <div>
            <Container>
            <PokemonComponentList></PokemonComponentList>
            </Container>
        </div>
    )
}

export default PokemonList
