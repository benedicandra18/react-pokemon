import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { notFoundPokemon, setPokemon, setPokemonLoading } from '../redux/actions/pokemonActions'
import { Img } from './../styles/Img.style'
import { Container } from '../styles/Container.style'
import { Type } from '../styles/Type.style'
import { Label } from '../styles/Label.style'
import { Body } from '../styles/Body.style'
import NotFoundComponent from './NotFoundComponent'

const PokemonDetail = () => {
    const { pokemonName } = useParams()
    const dispatch = useDispatch()
    const { pokemon, notFound } = useSelector(state => state.pokemon)
    const pokemons = useSelector(state => state.pokemons.pokemons)

    const fetchPokemonData = async () => {
        dispatch(setPokemonLoading())
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .catch(err => console.log(err))
        
        var names = []
        pokemons.map(pokemon => names.push(pokemon.name))
        if(names.includes(pokemonName)){
            dispatch(setPokemon(response.data))
        }
        else{
            dispatch(notFoundPokemon())
        }
    }

    useEffect(() => {
        fetchPokemonData()
    }, [pokemonName, dispatch])

    const colors = ['#ed835c', '#44a8eb', '#ae44cf', '#4bc94d', '#989ced']

    return (
        <>
         {!notFound ? 
            <div>
                <Label>{pokemon.name}</Label>
                        <Img src={pokemon.sprites.back_default}></Img>
                        <Img src={pokemon.sprites.back_female}></Img>
                        <Img src={pokemon.sprites.back_shiny}></Img>
                        <Img src={pokemon.sprites.back_shiny_female}></Img>
                        <Img src={pokemon.sprites.front_default}></Img>
                        <Img src={pokemon.sprites.front_female}></Img>
                        <Img src={pokemon.sprites.front_shiny}></Img>
                        <Img src={pokemon.sprites.front_shiny_female}></Img> 

                        {/* {pokemon.types.map( type =>{
                return <Type key={type.name} backgroundColor={colors[Math.floor(Math.random() * type.length)]}>{type.name}</Type> 
            })}  */}

                 </div>             
            :
            <NotFoundComponent /> 
       }
        
        </>
    )
}

export default PokemonDetail

