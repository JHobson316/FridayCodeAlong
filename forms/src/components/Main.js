
import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: "",
    }
  }
  handleChange = (event) => {
    // When user enters text, change the state
    this.setState({value: event.target.value}, () => console.log(this.state.value));
  }
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Bop");
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.state.value}</h2>
      </>
    )
  }
}
