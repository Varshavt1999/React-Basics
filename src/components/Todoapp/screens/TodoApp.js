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
                    <Input type="text" placeholder='Enter items...'/>
                    {/* <Button>Add</Button> */}
                </Form>
                <ItemSection>
                    <Item><Name>item1 </Name><Icon className="fa-solid fa-trash-can"></Icon></Item>
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
    background-color:#056679 ;
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
    width:100% ;
    margin-bottom:20px ; 
`;
const Input = styled.input`
    background-color:#056679 ;
    padding:15px ;
    width:100% ;
    border-radius:4px;
    border:1px solid #fff ;
    color: #a9a9a9;
    font-weight:600 ;
    outline:none ;
    ::placeholder {
       color: #a9a9a9;
       font-weight:600 ;
   }
`;
// const Button = styled.button`

// `;
const ItemSection = styled.ul`
    /* background-color:#fff ; */
    /* padding-top:20px; */
    border-radius:4px;
    min-height:150px ;
    
`;
const Item = styled.li`
    text-align:left ;
    padding:10px 20px;
    background-color:#056679;
    margin-bottom:6px ;
    border-radius:4px ;
    box-shadow: 1px 3px 4px 0px #000;
    display:flex ;
    justify-content: space-between;
`;
const Name = styled.h5`
    font-weight:700 ;
    font-size:16px ;
    color:#cdcdcd ;
`;
const Icon = styled.div`
    font-weight:700 ;
    font-size:16px ;
    color:#cdcdcd ;
`;

