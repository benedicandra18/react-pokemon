import React from 'react'
import {useSelector} from 'react-redux'

function PokemonComponentList() {
    const pokemons = useSelector(state => state.pokemons.pokemons)
    const renderList = pokemons.map((pokemon)=>{
        return (
            <div className="four column wide" key={pokemon.id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={pokemon.sprites.front_default}></img>
                        </div>
                        <div className="content">
                            <div className="header">{pokemon.name}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    })

    return(
        <>{renderList}</>
    )
    
}

export default PokemonComponentList
