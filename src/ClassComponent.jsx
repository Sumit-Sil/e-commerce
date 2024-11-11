import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state={data:"hello world"}
    }
    componentDidMount(){
        console.log("mounting done")
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}
