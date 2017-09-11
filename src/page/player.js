import React from "react";
import $ from "jquery";
import "./player.css";

import musics from "../config";

import Progress from "../components/progress";

class PlayerPage extends React.Component {
    $dom;

    constructor(props) {
        super(props);

        this.state = {
            progress: "-",
            totalTime: 0,
            currentTime: 0,
            currentMusic: {},
        }

        this.timeFilter = this.timeFilter.bind(this);
        this.returnUrl = this.returnUrl.bind(this);
    }

    returnUrl() {
        this.setState({
            currentMusic: musics.find(e => {
                return e.id == this.props.match.params.id;
            })
        })

        return this.state.currentMusic.url;
    }

    componentDidMount() {
        this.$dom = $("#player");
        let that = this;
        this.$dom.jPlayer({
            ready() {
              $(this).jPlayer("setMedia", {
                mp3: that.returnUrl(),
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
            // console.log(data)
            // console.log(this.state)
        })
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
      this.$dom.jPlayer("paused")
  }

  timeFilter(num) {
    return `${this.compleTime(Math.floor(num / 60) || 0)}:${this.compleTime(Math.round(num % 60) || 0)}`;
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
                        <div className="control flex">
                            <div className="pre-music"> 上 </div>
                            <i className="play-or-stop material-icons">play_arrow</i>
                            <div className="next-music"> 下 </div>
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