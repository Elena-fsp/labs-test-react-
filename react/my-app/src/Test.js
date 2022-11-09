import React from 'react';

class Test extends React.Component {
  constructor() {
    super();
    this.pres = this.pres.bind(this);
    this.state = {
      count: 0
    };
  }
  pres() {
    let currentCount = this.state.count;
    currentCount++;
    this.setState({
      count: currentCount
    })
    
    
  }
  render() {
    return (
      <>
      <h1>State</h1>
    <button onClick={this.pres}>Change</button>
    <div>
      {this.state.count}
    </div>
    
    </>)
  }
}

export default Test;