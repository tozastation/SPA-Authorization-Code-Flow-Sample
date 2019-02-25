import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { OAuth } from './components/oauth/layout/oauth';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <OAuth onClick={this.onClick}/>
      </div>
    );
  }

  private onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = 'http://localhost:8888/login';
    console.log('Clicked');
  }
}

export default App;
