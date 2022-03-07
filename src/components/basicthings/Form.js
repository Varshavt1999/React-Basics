import React, { Component } from 'react'

class Form extends Component {
    state = {
        firstName : "",
        lastName : "",
    };
    onHandleChange =(event) =>{
        // console.log("typing ");
        // console.log(event.target.value);
        this.setState({
            [event.target.name] : event.target.value,
        })
    }
    onSubmit = (e) =>{
        // e.preventDefault();
        console.log(this.state);
        console.log(this.state.firstName);
        console.log(this.state.lastName);
    }
  render() {
    return (
      <form>
          <h1>OnChange Event</h1>
          <h3>Simple Form</h3>
          <input type="text" onChange={this.onHandleChange} name="firstName" value={this.state.firstName}/>
          <input type="text" onChange={this.onHandleChange} name="lastName" value={this.state.lastName}/>
          {/* <button onClick={this.onSubmit} >Submit</button> */}
          <button onClick={this.onSubmit} type="button" >Submit</button>
      </form>
    )
  }
}
export default Form