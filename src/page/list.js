import React from "react";
import musics from "../config";

import "./list.css";

export default class ListPage extends React.Component {
    selectMusic(i) {
        return () => {
            this.props.selectMusic(i);
        }
    }

    render() {
        return (
            <div className="list-page">
                <ul>
                    {musics.map((e, i) => {
                        return (
                            <li key={e.name} onClick={this.selectMusic.call(this, i)}>
                                <span>{e.author}-{e.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}