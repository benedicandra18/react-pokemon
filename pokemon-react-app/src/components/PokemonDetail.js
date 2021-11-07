import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemon } from '../redux/actions/pokemonActions'

function PokemonDetail() {
    const {idPokemon}=useParams()
    const dispatch=useDispatch()
    const pokemon = useSelector(state => state.pokemon.pokemon)

    const fetchPokemonData= async()=>{
        const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .catch(err=>console.log(err))

        dispatch(setPokemon(response.data))
    }

    useEffect(()=>{
        fetchPokemonData()
    },[])

    return (
        <div>
            {pokemon.name}
        </div>
    )
}

export default PokemonDetail

