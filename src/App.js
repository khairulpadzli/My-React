import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Image = (props) => {
  let { src, title } = props;
  src = src || "https://www.w3schools.com/html/pic_trulli.jpg";
  title = title || 'CSI Office';

  return (
    <img src={src} alt={title} height="300" />
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React from CSI</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Image src="https://www.w3schools.com/html/pic_trulli.jpg" title="CSI Office" />
          <Image src="https://www.w3schools.com/html/img_girl.jpg" title="CSI Employee" />
          <Image src="https://www.w3schools.com/html/img_chania.jpg" title="CSI Road" />
        </div>
      </div>
    );
  }
}

export default App;
