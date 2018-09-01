import React, { Component } from 'react';

class App extends Component {
  state = {
    r: 0,
    g: 0,
    b: 0,
  };

  handleSliderChangeR = e => {
    console.log(this.state.r);
    this.setState({ r: e.target.value });
  };
  handleSliderChangeG = e => {
    console.log(this.state.r);
    this.setState({ g: e.target.value });
  };
  handleSliderChangeB = e => {
    console.log(this.state.r);
    this.setState({ b: e.target.value });
  };

  render() {
    console.log(this.state.r);
    return (
      <div
        className="App"
        style={{
          backgroundColor: `rgb(${this.state.r}, ${this.state.g}, ${
            this.state.b
          })`,
          width: '100vw',
          height: '100vh',
        }}
      >
        <form>
          R
          <input
            id="R"
            type="range"
            min="0"
            max="255"
            onChange={e => {
              this.handleSliderChangeR(e);
            }}
          />
          G
          <input
            id="G"
            type="range"
            min="0"
            max="255"
            onChange={e => {
              this.handleSliderChangeG(e);
            }}
          />
          B
          <input
            id="B"
            type="range"
            min="0"
            max="255"
            onChange={e => {
              this.handleSliderChangeB(e);
            }}
          />
        </form>
      </div>
    );
  }
}

export default App;
