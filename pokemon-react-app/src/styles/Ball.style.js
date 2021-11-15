import styled from 'styled-components'

export const Ball = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({align})=>align};
    border: 10px solid #000000;
    border-radius: 50%;
    background: linear-gradient(white 50%, red 50%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 10px;

    flex: ${({flex})=>flex};
    height: ${({height})=>height};
    padding: ${({padding})=>padding};    
`