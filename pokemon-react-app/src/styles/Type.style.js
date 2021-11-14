import styled from "styled-components";

export const Type = styled.div`
    background-color:${(props) => props.backgroundColor}; 
    border-radius: 20%;
    padding: 1%;
    margin: 10px;
    font-family: 'Segoe Print';
    font-weight: bold;
    text-align: center;
    font-size: 1vw;
    width: 10%;

    &:hover{
      background: #f0da37;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`