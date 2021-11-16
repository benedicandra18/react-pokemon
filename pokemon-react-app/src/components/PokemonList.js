import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setPokemons, setPokemonsLoading } from '../redux/actions/pokemonActions'
import { Container, Label, Ball, StyledLink, Img } from './PokemonList.style'
import InputComponent from './InputComponent'

function PokemonList() {
    const { pokemons, filteredPokemons, filterStatus, loading } = useSelector(state => state.pokemons)
    const dispatch = useDispatch();

    const fetchPokemons = async () => {

        dispatch(setPokemonsLoading())

        const gen1PokemonsPremises = await axios.get('https://pokeapi.co/api/v2/generation/1')
            .then(res => res.data.pokemon_species
                .map(specie =>axios.get(specie.url.slice(0,33) + specie.url.slice(41,specie.url.length))
                .then(({ data }) => (data)) ))
            
        const gen1Pokemons = await axios.all(gen1PokemonsPremises)

        dispatch(setPokemons(gen1Pokemons))
    }

    useEffect(() => {
        if (pokemons.length === 0) {
            fetchPokemons()
        }
    }, [])

    return (
        <div>
            <Container>
                <InputComponent />
                {loading ?
                    <Label color="white">Loading ... </Label> :
                    <Container>
                        {pokemons.length !== 0 && filteredPokemons.length === 0 && filterStatus === false && (
                            pokemons.map((pokemon) => {
                                return (
                                    <Ball key={pokemon.id} flex="0 0 20%" height="30vh" align="center">
                                        <StyledLink to={`/${pokemon.name}`} >
                                            <Img src={pokemon.sprites.front_default} width="90%"></Img>
                                            <Label fontSize="1.3vw">{pokemon.name}</Label>
                                        </StyledLink>
                                    </Ball>
                                )
                            }))}

                        {filteredPokemons.length !== 0 && (
                            filteredPokemons.map((pokemon) => {
                                return (
                                    <Ball key={pokemon.id} flex="0 0 20%" height="30vh" align="center">
                                        <StyledLink to={`/${pokemon.name}`} >
                                            <Img src={pokemon.sprites.front_default} width="90%"></Img>
                                            <Label fontSize="1.3vw">{pokemon.name}</Label>
                                        </StyledLink>
                                    </Ball>
                                )
                            })
                        )}
                        {filteredPokemons.length === 0 && filterStatus === true && (
                            <Label>No pokemons found ...</Label>
                        )}
                    </Container>}

            </Container>
        </div>
    )
}

export default PokemonList
