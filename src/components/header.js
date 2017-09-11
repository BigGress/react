import React from "react";
import logo from "../logo.svg";
import "./header.css";

import { NavLink } from "react-router-dom";

const Routes = [
    {
        url: "/player",
        name: "播放器"
    },
    {
        url: "/list",
        name: "列表"
    }
]

class Header extends React.Component {

    setUrl(baseUrl) {
        if (baseUrl === "/player") {
            return `${baseUrl}/${this.props.currentMusic.id}`
        } 

        return baseUrl;
    }

    render() {
        return (
            <div className="component-header">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <h2 className="title">React Music</h2>

                <ul className="nav-ul">
                    {Routes.map(route => (<li key={route.name}>
                        <NavLink to={this.setUrl.call(this, route.url)} activeClassName="active">{route.name}</NavLink>
                    </li>))}
                </ul>
            </div>
        )
    }
}

export default Header