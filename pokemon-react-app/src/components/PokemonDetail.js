import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { notFoundPokemon, setPokemon } from '../redux/actions/pokemonActions'
import { Img, Container, Label, Ball } from './PokemonList.style'
import { Type, StatRow, List, Item, LabelItem } from './PokemonDetail.style'
import NotFoundComponent from './NotFoundComponent'


const PokemonDetail = () => {

    const [isLoading, setLoading] = useState(true)
    const { pokemonName } = useParams()
    const dispatch = useDispatch()
    const { pokemon, notFound } = useSelector(state => state.pokemon)

    const fetchPokemonData = async () => {
        try{
            const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            return dispatch(setPokemon(response.data))
        } 
        catch {
            return dispatch(notFoundPokemon())
        }
    }

    useEffect(() => {
        fetchPokemonData().then(() => setLoading(false))
    }, [pokemonName])

    const colors = ['#ed832c', '#44a8eb', '#ae44cf', '#4bc94d', '#989ced', '#72f037', '#f037a6']
    const { name, sprites, types, stats } = pokemon

    return (
        <>
            {isLoading ? <Label color="white">Loading ... </Label> :
                (!notFound ?
                    <div>
                        <Container>
                            <Ball flex="0 0 60%" padding="6%" align="stretch">
                                <Label fontSize="2.3vw">{name}</Label>
                                <Container>
                                    {sprites.front_default && <Img src={sprites.front_default} width="18%" ></Img>}
                                    {sprites.back_default && <Img src={sprites.back_default} width="18%" ></Img>}
                                    {sprites.front_shiny && <Img src={sprites.front_shiny} width="18%" ></Img>}
                                    {sprites.back_shiny && <Img src={sprites.back_shiny} width="18%" ></Img>}
                                    {sprites.front_female && <Img src={sprites.front_female} width="18%" ></Img>}
                                    {sprites.back_female && <Img src={sprites.back_female} width="18%" ></Img>}
                                    {sprites.front_shiny_female && <Img src={sprites.front_shiny_female} width="18%" ></Img>}
                                    {sprites.back_shiny_female && <Img src={sprites.back_shiny_female} width="18%" ></Img>}

                                </Container>
                                <Container >
                                    {types.map(({ type }) => {
                                        return <Type
                                            key={type.name}
                                            backgroundColor={colors[Math.floor(Math.random() * 5)]}>{type.name}</Type>
                                    })}
                                </Container>


                                <List>
                                    {stats.map(stat =>
                                        <StatRow key={stat.stat.name}>
                                            <LabelItem>{stat.stat.name}</LabelItem>
                                            <Item backgroundColor={colors[Math.floor(Math.random() * 5)]} value={stat.base_stat}>{stat.base_stat}</Item>
                                        </StatRow>
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

