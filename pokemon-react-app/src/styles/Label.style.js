import styled from 'styled-components'

export const Label = styled.div`
font-family: 'Pokemon', sans-serif;
color: ${({color}) => color};
display: flex; 
align-items: center;
justify-content: center;
font-size: ${({fontSize}) => fontSize};
`
