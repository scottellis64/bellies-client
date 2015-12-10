import React from "react";

import ShoppingCartItem from "./ShoppingCartItem";

export default class ShoppingCart extends React.Component {
    render() {
        let itemsById = this.props.contents.get("itemsById");
        var itemNodes = this.props.contents.get("items").map(id => {
            var item = itemsById.get(id);
            return (
                <ShoppingCartItem key={item.get("key")} name={item.get("name")} qty={item.get("qty")}
                                  image={item.get("image")} price={item.get("price")}/>
            );
        });

        return (
            <ul className="list-inline shop-badge badge-lists badge-icons pull-right">
                <li>
                    <a href="#"><i className="fa fa-shopping-cart"></i></a>
                    <span className="badge badge-sea rounded-x">3</span>
                    <ul className="list-unstyled badge-open mCustomScrollbar" data-mcs-theme="minimal-dark">
                        {itemNodes}
                        <li className="subtotal">
                            <div className="overflow-h margin-bottom-10">
                                <span>Subtotal</span>
                                <span className="pull-right subtotal-cost">${this.props.contents.subtotal}</span>
                            </div>
                            <div className="row">
                                <div className="col-xs-6">
                                    <a href="#" className="btn-u btn-brd btn-brd-hover btn-u-sea-shop btn-block">View Cart</a>
                                </div>
                                <div className="col-xs-6">
                                    <a href="#" className="btn-u btn-u-sea-shop btn-block">Checkout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        );
    }
}