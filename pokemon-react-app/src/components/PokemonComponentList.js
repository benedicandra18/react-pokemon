import React from 'react'
import { useSelector } from 'react-redux'
import { Ball } from '../styles/Ball.style'
import { Img } from '../styles/Img.style'
import { Label } from '../styles/Label.style'
import { StyledLink } from '../styles/Link.style'

function PokemonComponentList() {
    const pokemons = useSelector(state => state.pokemons.pokemons)
    const filteredPokemons = useSelector(state => state.pokemons.filteredPokemons)
    const filterStatus = useSelector(state => state.pokemons.filterStatus)
    var renderList=[]
    if(pokemons.length!=0 && filteredPokemons.length==0 && filterStatus==false){
        renderList = pokemons.map((pokemon) => {
            return (
                <Ball key={pokemon.id} >
                    <StyledLink to={`/${pokemon.name}`} style={{ textDecoration: 'none' }}>
                        <Img src={pokemon.sprites.front_default} width="80%"></Img>
                        <Label fontSize="1.3vw">{pokemon.name}</Label>
                    </StyledLink>
                </Ball>
            )
        })
    }
    else
        if (filteredPokemons.length!=0 ) {
            renderList = filteredPokemons.map((pokemon) => {
                return (
                    <Ball key={pokemon.id}>
                        <StyledLink to={`/${pokemon.name}`} style={{ textDecoration: 'none' }}>
                            <Img src={pokemon.sprites.front_default} width="80%"></Img>
                            <Label fontSize="1.3vw">{pokemon.name}</Label>
                        </StyledLink>
                    </Ball>
                )
            })
        }
        else
            if(filteredPokemons.length==0 && filterStatus==true){
                renderList= (<Label>No pokemons found ...</Label>)
            }
      
    return (
        <>{renderList}</>
    )
}

export default PokemonComponentList
