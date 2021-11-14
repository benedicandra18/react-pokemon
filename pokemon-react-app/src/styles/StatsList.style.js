import styled from "styled-components";

export const List= styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column; 
  margin-bottom: 10%;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
  font-family: 'Segoe Print';
  font-weight: bold;
`
export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
`

export const Item = styled.li`
  background-color:${({backgroundColor})=>backgroundColor}; 
  width: calc(0.65 * (${({ value }) => value}%) ) ;
  height: 20px;
  border-radius: 3px;
  &:hover{
      background: #f0da37;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1vw;
`

export const LabelItem= styled.span`
  width: 28%;
  margin-right: 0.5%;
  color: white;
  font-size: 1vw;
`