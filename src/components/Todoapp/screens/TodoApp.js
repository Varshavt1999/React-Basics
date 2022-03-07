import React, { Component } from 'react'
import styled from "styled-components"
// import "../../../App.css"


export default class TodoApp extends Component {
  render() {
    return (
        <OuterContainer>
            <TodoContainer>
                <Title>Todo App</Title>
                <Form>
                    <Input type="text" placeholder='Enter items'/>
                    {/* <Button>Add</Button> */}
                </Form>
                <ItemSection>
                    <Item>item1</Item>
                </ItemSection>
            </TodoContainer>
        </OuterContainer>
    )
  }
}

const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:100vh ;
`;
const TodoContainer = styled.div`
    background-color:#000 ;
    width:50% ;
    margin:0 auto ;
    padding:20px ;
    border-radius:6px;
`;
const Title = styled.h2`
    margin-bottom:20px ;
    color:#fff ;
`;
const Form = styled.form`
    background-color:#fff ;
    padding:20px ;
    margin-bottom:20px ;
    border-radius:4px;
`;
const Input = styled.input`
    width:90%;
    margin:0 auto ;
    padding:10px ;
`;
// const Button = styled.button`

// `;
const ItemSection = styled.ul`
    background-color:#fff ;
    padding:20px ;
    border-radius:4px;
    min-height:150px ;
`;
const Item = styled.li`

`;

