import React from 'react'
import { Container, Label, Ball } from './PokemonList.style'

const NotFoundComponent = () =>{
    return (
        <div>
            <Container>
            <Ball flex="0 0 20%" height="40vh" align="center">
                <Label>404 NOT FOUND</Label>
            </Ball>  
            </Container>
        </div>
    )
}

export default NotFoundComponent

