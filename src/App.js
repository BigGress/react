import React, { Component } from 'react';
import { Route,BrowserRouter as Router } from "react-router-dom";
import $ from "jquery";
import logo from './logo.svg';
import './App.css';
import "jplayer";

import musics from "./config";

import Header from "./components/header";
import PlayerPage from "./page/player";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      musics: musics,
      currentMusic: musics[0]
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <audio id="player"></audio>
          <Header currentMusic={this.state.currentMusic}/>
          {/* <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div> */} 
          {/* <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <Route path="/player/:id" component={PlayerPage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
