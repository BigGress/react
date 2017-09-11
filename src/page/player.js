import React from "react";
import $ from "jquery";
import "./player.css";

import musics from "../config";

import Progress from "../components/progress";

import Music from "../service/music";

class PlayerPage extends React.Component {
    $dom;

    service = new Music();

    constructor(props) {
        super(props);

        this.timeFilter = this.timeFilter.bind(this);
        this.returnUrl = this.returnUrl.bind(this);

        this.init();
    }

    init() {
        this.state = {
            progress: "-",
            totalTime: 0,
            currentTime: 0,
            currentMusic: {},
            paused: "playing",
            voice: this.service.getVoice(),
        }
    }

    returnUrl() {
        this.setState({
            currentMusic: musics.find(e => {
                return e.id == this.props.match.params.id;
            })
        })

        return this.state.currentMusic;
    }

    componentDidMount() {
        this.$dom = $("#player");
        let that = this;

        this.returnUrl();

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

        this.$dom.bind($.jPlayer.event.timeupdate, (data) => {
            this.setState({
                progress: Math.round(data.jPlayer.status.currentPercentAbsolute)
            });
    
            this.setState({
                totalTime: data.jPlayer.status.duration,
                currentTime: data.jPlayer.status.currentTime,
            })
        })

        // 声音
        if (this.state.voice) {
            this.changeVoice.call(this, this.state.voice);
        }
    }


  componentWillUnmount() {
    this.$dom.unbind($.jPlayer.event.timeupdate);
  }


  changePosition(data) {
    this.$dom.jPlayer("play", this.state.totalTime * data);
  }

  compleTime(num) {
    if (num < 10) {
      return `0${num}`;
    }

    return num;
  }
  
  toggleMusic() {
    if (this.state.paused === "paused") {
        this.$dom.jPlayer("play");

        this.setState({
            paused: "playing",
        })
    } else {
        this.$dom.jPlayer("pause");

        this.setState({
            paused: "paused",
        })
    }
  }

  timeFilter(num) {
    return `${this.compleTime(Math.floor(num / 60) || 0)}:${this.compleTime(Math.round(num % 60) || 0)}`;
  }

  pretMusic() {
    let index = musics.findIndex(e => e.id == this.props.match.params.id);
    if (index !== 0) {
        window.location.href = `/player/${--index}`;
    } else {
        window.location.href = `/player/${musics.length - 1}`;
    }
  }

  nextMusic() {
    let index = musics.findIndex(e => e.id == this.props.match.params.id);
    if (index < musics.length - 1) {
        window.location.href = `/player/${++index}`;
    } else {
        window.location.href = `/player/0`;
    }
  }

  changeVoice(data) {
      this.setState({
          voice: Math.round(data * 100),
      });

      this.service.setVoice(data),

      this.$dom.jPlayer("volume", data);
  }

    render() {
        return (
            <div className="player-page">
                <div className="time-box">
                    <div className="detail-box flex">
                        <div className="detail">
                            <div className="name-box">
                                <h4 className="name">{this.state.currentMusic.author}-{this.state.currentMusic.name}</h4>
                            </div>
                            <div className="time-detail">
                                <h6>{this.timeFilter(this.state.currentTime)}/{this.timeFilter(this.state.totalTime)}</h6>
                            </div>
                        </div>
                        <span className="flex"></span>
                        <div className="control">
                            <div className="flex">
                                <i className="material-icons" onClick={this.pretMusic.bind(this)}>navigate_before</i>
                                <i className="play-or-stop material-icons" onClick={this.toggleMusic.bind(this)}>
                                    {this.state.paused === "paused" ? 'play_arrow' : 'pause'}
                                </i>
                                <i className="material-icons" onClick={this.nextMusic.bind(this)}>navigate_next</i>
                            </div>
                            <div className="voice flex">
                                <i className="material-icons">volume_up</i>
                                <Progress position={this.state.voice} changePosition={this.changeVoice.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <div className="time-line">
                        <Progress position={this.state.progress} changePosition={this.changePosition.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerPage;