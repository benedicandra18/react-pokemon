import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { notFoundPokemon, setPokemon } from '../redux/actions/pokemonActions'
import { Img } from './../styles/Img.style'
import { Container } from '../styles/Container.style'
import { Type } from '../styles/Type.style'
import { Label } from '../styles/Label.style'
import { Ball } from '../styles/Ball.style'
import NotFoundComponent from './NotFoundComponent'
import { Container2, List, Item, LabelItem } from '../styles/StatsList.style'

const PokemonDetail = () => {

    const [isLoading, setLoading] = useState(true)
    const { pokemonName } = useParams()
    const dispatch = useDispatch()
    const { pokemon, notFound } = useSelector(state => state.pokemon)

    const fetchPokemonData = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => dispatch(setPokemon(res.data)))
            .catch(() => dispatch(notFoundPokemon()))
    }

    useEffect(() => {
        fetchPokemonData().then(()=>setLoading(false))
    }, [pokemonName])

    const colors = ['#ed832c', '#44a8eb', '#ae44cf', '#4bc94d', '#989ced', '#72f037', '#f037a6']

    return (
        <>
            {isLoading ? <Label color="white">Loading ... </Label> :
                (!notFound ?
                    <div>
                        <Container>
                            <Ball flex="0 0 60%" padding="6%" align="stretch">
                                <Label fontSize="2.3vw">{pokemon.name}</Label>
                                <Container>
                                    {pokemon.sprites.front_default && <Img src={pokemon.sprites.front_default} width="18%" ></Img>}
                                    {pokemon.sprites.back_default && <Img src={pokemon.sprites.back_default} width="18%" ></Img>}
                                    {pokemon.sprites.front_shiny && <Img src={pokemon.sprites.front_shiny} width="18%" ></Img>}
                                    {pokemon.sprites.back_shiny && <Img src={pokemon.sprites.back_shiny} width="18%" ></Img>}
                                    {pokemon.sprites.front_female && <Img src={pokemon.sprites.front_female} width="18%" ></Img>}
                                    {pokemon.sprites.back_female && <Img src={pokemon.sprites.back_female} width="18%" ></Img>}
                                    {pokemon.sprites.front_shiny_female && <Img src={pokemon.sprites.front_shiny_female} width="18%" ></Img>}
                                    {pokemon.sprites.back_shiny_female && <Img src={pokemon.sprites.back_shiny_female} width="18%" ></Img>}

                                </Container>
                                <Container >
                                    {pokemon.types.map(({ type }) => {
                                        return <Type
                                            key={type.name}
                                            backgroundColor={colors[Math.floor(Math.random() * 5)]}>{type.name}</Type>
                                    })}
                                </Container>


                                <List>
                                    {pokemon.stats.map(stat =>
                                        <Container2 key={stat.stat.name}>
                                            <LabelItem>{stat.stat.name}</LabelItem>
                                            <Item backgroundColor={colors[Math.floor(Math.random() * 5)]} value={stat.base_stat}>{stat.base_stat}</Item>
                                        </Container2>
                                    )}
                                </List>

                            </Ball>
                        </Container>

                    </div>
                    :
                    <NotFoundComponent />
                )
            }
        </>
    )
}

export default PokemonDetail

