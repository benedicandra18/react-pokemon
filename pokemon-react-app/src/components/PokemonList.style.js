import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({dir})=>dir};
    margin: 5vh;
    justify-content: center;
    column-gap: 20px;
    row-gap: 20px;

`

export const Input = styled.input`
    border: 10px solid #000000;
    height: 30px;
    width: 20%;
    display: block;
    margin-left: 40%;
    margin-right: 40%;
    font-size: medium;
`

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
    width: ${({width})=>width};
    padding: ${({padding})=>padding};    
`

export const Label = styled.div`
    font-family: 'Pokemon', sans-serif;
    color: ${({color}) => color};
    display: flex; 
    align-items: center;
    justify-content: center;
    font-size: ${({fontSize}) => fontSize};
`

export const Img = styled.img`
    width: ${({width})=> width};
    height: auto;
`

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black
    }
`;