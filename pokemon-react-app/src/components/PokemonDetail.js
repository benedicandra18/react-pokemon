import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemon } from '../redux/actions/pokemonActions'
import {Img} from './../styles/Img.style'
import { Container } from '../styles/Container.style'
import { Type } from '../styles/Type.style'
import { Label } from '../styles/Label.style'
import { Body } from '../styles/Body.style'

function PokemonDetail() {
    const {idPokemon}=useParams()
    const dispatch=useDispatch()
    const pokemon = useSelector(state => state.pokemon.pokemon)

    const fetchPokemonData= async()=>{
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
            .catch(err=>console.log(err))
        
        dispatch(setPokemon(response.data))
        console.log(response.data.types[0].type.name)
    }

    useEffect(()=>{
        if(idPokemon && idPokemon!=="")
            fetchPokemonData()
    },[idPokemon])

    const colors=['#ed835c', '#44a8eb', '#ae44cf', '#4bc94d', '#989ced' ]

    return (
        <div>
            <Label>{pokemon.name}</Label>
            {/* <Container> */}
            {/* <Img src={pokemon.sprites.back_default}></Img>
            <Img src={pokemon.sprites.back_female}></Img>
            <Img src={pokemon.sprites.back_shiny}></Img>
            <Img src={pokemon.sprites.back_shiny_female}></Img>
            <Img src={pokemon.sprites.front_default}></Img>
            <Img src={pokemon.sprites.front_female}></Img>
            <Img src={pokemon.sprites.front_shiny}></Img>
            <Img src={pokemon.sprites.front_shiny_female}></Img>  */}

         {/* {pokemon.types.map( type =>{
                return <Type key={type.name} backgroundColor={colors[Math.floor(Math.random() * type.length)]}>{type.name}</Type> 
            })}  */}
            
            {/* </Container> */}
        </div>
    )
}

export default PokemonDetail

