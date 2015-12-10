import React, {Component} from "react";
import {Link} from "react-router";

class MenuItem extends Component {
    render() {
        return (
            <li><Link key={`${this.props.key}` + "_link"} to={`${this.props.path}`}>{this.props.label}</Link></li>
        );
    }
}

class Menu extends Component {
    render() {
        var itemNodes = this.props.items.map((item) => {
            return (
                <MenuItem key={item.get("key")} label={item.get("label")} path={item.get("path")}
                          body={item.get("body")} href={item.get("href")}/>
            );
        });

        return (
            <li className={this.props.className}>
                <a href="javascript:void(0);" className="dropdown-toggle" data-hover="dropdown"
                   data-toggle="dropdown">{this.props.label}</a>
                <ul className="dropdown-menu">
                    {itemNodes}
                </ul>
            </li>
        )
    }
}

export default class MenuBar extends Component {
    render() {
        var menuNodes = this.props.menudata.get("menus").map((menu) => {
            return (
                <Menu key={menu.get("key")} label={menu.get("label")} className={menu.get("className")}
                      items={menu.get("items")}/>
            );
        });

        return (
            <ul className="nav navbar-nav">
                {menuNodes}
            </ul>
        );
    }
}