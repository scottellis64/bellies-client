import React, {Component} from "react";
import {Link} from "react-router";

export default class TopBar extends Component {
    render() {
        return (
            <div className="topbar-v3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <ul className="list-inline right-topbar pull-right">
                                <li><Link key="logintop_link" to="/login">Login</Link> | <Link key="registertop_link" to="/register">Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}