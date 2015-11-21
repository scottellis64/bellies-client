import React from "react";

export default class TopBar extends React.Component {
    render() {
        return (
            <div className="topbar-v3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <ul className="list-inline right-topbar pull-right">
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Wishlist (0)</a></li>
                                <li><a href="#">Login</a> | <a href="#">Register</a></li>
                                <li><i className="search fa fa-search search-button"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}