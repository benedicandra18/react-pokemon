import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card } from '../styles/Card.style'
import { Img} from '../styles/Img.style'
import { CardLabel } from '../styles/CardLabel.style'

function PokemonComponentList() {
    const pokemons = useSelector(state => state.pokemons.pokemons)
    const renderList = pokemons.map((pokemon) => {
        return (
            <Card key={pokemon.id}>
                <Link to={`/${pokemon.id}`}>
                    <Img src={pokemon.sprites.front_default}></Img>
                </Link>
                <CardLabel>{pokemon.name}</CardLabel>
            </Card>
        )
    })

    return (
        <>{renderList}</>
    )

}

export default PokemonComponentList
