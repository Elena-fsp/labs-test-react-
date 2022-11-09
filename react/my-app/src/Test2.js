import React from "react";

class Test2 extends React.Component {
  constructor() {
    super();
    this.state = {
      s1: 0
    }  
  }
  handler = () => {
    let value = this.state.s1;
    value++;
    this.setState( {
      s1: value
    })
  } 
  render() {
    return (
      <>
      <button onClick={this.handler}>Push</button>
      <div>
        {this.state.s1}
      </div>
      </>
    )
  }
}

export default Test2;