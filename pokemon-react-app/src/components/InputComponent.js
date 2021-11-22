import React, { useState } from 'react'
import { Input } from './PokemonList.style'
import { useSelector, useDispatch } from 'react-redux'
import { filterPokemons } from './../redux/actions/pokemonActions'
import {debounce} from 'lodash'

function InputComponent() {

    const [searchName, setSearchName] = useState('')

    const pokemons = useSelector(state => state.pokemons.pokemons)
    const dispatch = useDispatch()

    const searchHandler = (name) => {
        setSearchName(name)
        if (name !== '') {
            const filteredPokemons = pokemons.filter((pokemon) => {
                //return pokemon.name.substring(0,name.length)===name.toLowerCase()
                return pokemon.name.toLowerCase().includes(name.toLowerCase())
            })
            dispatch(filterPokemons(filteredPokemons))
        }
        else {
            dispatch(filterPokemons(pokemons))
        }
    }

    const debouncedHandleChange= debounce((name)=>{searchHandler(name)}, 500)

    return (
        <div>
            <Input
                placeholder="Filter pokemon..."
                onChange={(e)=>debouncedHandleChange(e.target.value)}
            ></Input>
        </div>
    )
}

export default InputComponent
