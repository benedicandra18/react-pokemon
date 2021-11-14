import React from 'react'
import { Ball } from '../styles/Ball.style'
import { Container } from '../styles/Container.style'
import { Label } from '../styles/Label.style'

const NotFoundComponent = () =>{
    return (
        <div>
            <Container>
            <Ball>
                <Label>404 NOT FOUND</Label>
            </Ball>  
            </Container>
        </div>
    )
}

export default NotFoundComponent

