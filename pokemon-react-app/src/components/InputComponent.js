import React, { useState } from 'react'
import { Input } from '../styles/Input.style'
import { useSelector, useDispatch } from 'react-redux'
import { filterPokemons } from './../redux/actions/pokemonActions'

function InputComponent() {

    const [searchName, setSearchName] = useState('')

    const pokemons = useSelector(state => state.pokemons.pokemons)
    const dispatch = useDispatch();

    const searchHandler = (e) => {
        setSearchName(e.target.value)
        if (e.target.value !== '') {
            const filteredPokemons = pokemons.filter((pokemon) => {
                //return pokemon.name.substring(0,e.target.value.length)===e.target.value.toLowerCase()
                return pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            dispatch(filterPokemons(filteredPokemons))

        }
        else {
            dispatch(filterPokemons(pokemons))
        }
    }

    return (
        <div>
            <Input
                placeholder="Filter pokemon..."
                value={searchName}
                onChange={(e) => searchHandler(e)}
            ></Input>
        </div>
    )
}

export default InputComponent
