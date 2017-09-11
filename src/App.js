import React, { Component } from 'react';
import { Route,BrowserRouter as Router } from "react-router-dom";
import $ from "jquery";
import logo from './logo.svg';
import './App.css';
import "jplayer";

import musics from "./config";

import Header from "./components/header";
import PlayerPage from "./page/player";
import ListPage from "./page/list";

import Music from "./service/music";

class App extends Component {

  service = new Music();

  constructor(props) {
    super(props);
    this.state = {
      musics: musics,
      currentMusic: musics[0]
    };
  }

  selectMusic(index) {
    this.setState({
      currentMusic: musics[index],
    })

    this.$dom
        .jPlayer("setMedia", {
          mp3: this.state.currentMusic.url,
        })
        .jPlayer("play")
  }

  componentDidMount() {
      this.$dom = $("#player");
      let that = this;

      this.$dom.jPlayer({
          ready() {
            $(this).jPlayer("setMedia", {
              mp3: that.state.currentMusic.url,
            })
            .jPlayer("play")
          },
          supplied: "mp3",
          wmode: "window"
        });

      this.changeVoice();
  }

  changeVoice() {
    this.$dom.jPlayer("volume", this.service.getVoice());
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
          <Route path="/list" render={() => <ListPage selectMusic={this.selectMusic.bind(this)} />} />
          <Route path="/player/:id" component={PlayerPage} />
        </div>
      </Router>
    );
  }
}

export default App;
