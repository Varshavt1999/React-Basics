import React, { Component } from 'react'

export default class List extends Component {
    state = {
        data:[
            {
                id:1,
                name:"varsha",
                age:"10"
            },
            {
                id:2,
                name:"ammu",
                age:"18"
            },
            {
                id:3,
                name:"chinnu",
                age:"8"
            },
        ]
    }
    componentDidMount(){
        console.log("running");
    }
  render() {
    return (
      <div>
          <h2>List</h2>
          <ul>
              {this.state.data.map((value,index)=>{
                  return (
                    // <li>{" "}- show a warning that each child in a list should have unique id
                    // <li key={index}>{" "}
                     <li key={value.id}>
                        {value.id}) {value.name}, age{(value.age)}
                    </li>
                  )
              })}
          </ul>
      </div>
    )
  }
}
