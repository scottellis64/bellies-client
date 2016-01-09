import React, {Component} from "react";

import {Link} from "react-router";

export default class ShoppingCart extends Component {
    render() {
        return (
            <ul className="list-inline shop-badge badge-lists badge-icons pull-right">
                <li>
                    <Link key="ShoppingCartIconLink" to="/cartitems"><i className="fa fa-shopping-cart"></i></Link>
                    <span className="badge badge-sea rounded-x">{this.props.contents.get("itemsById").size}</span>
                </li>
            </ul>
        );
    }
}