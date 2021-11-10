import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setPokemons, setPokemonsLoading } from '../redux/actions/pokemonActions'
import PokemonComponentList from './PokemonComponentList'
import { Container } from '../styles/Container.style'
import InputComponent from './InputComponent'
import { Label } from '../styles/Label.style'

function PokemonList() {
    const { pokemons, loading } = useSelector(state => state.pokemons)
    const dispatch = useDispatch();

    const fetchPokemons = async () => {

        dispatch(setPokemonsLoading())

        const gen1Species = await axios.get('https://pokeapi.co/api/v2/generation/1')
            .then(res => res.data.pokemon_species.map(specie => specie.name))

        const allPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118')
            .then(res => res.data.results.map(pokemon =>
                axios.get(pokemon.url)
                    .then(({ data }) => (data))))

        const gen1Pokemons = await axios.all(allPokemons)
            .then(res => res.filter(res => gen1Species.includes(res.species.name)))

        dispatch(setPokemons(gen1Pokemons))
    }

    useEffect(() => {
        if(pokemons.length===0){
            fetchPokemons()
        } 
    }, [])

    return (
        <div>

            <Container>
                <InputComponent />
                {loading ?
                    <Container>
                        <Label>Loading ... </Label>
                    </Container> :
                    <Container>
                        <PokemonComponentList />
                    </Container>}

            </Container>
        </div>
    )
}

export default PokemonList
