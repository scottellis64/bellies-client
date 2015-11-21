import React, {Component} from "react";

export default class ShoppingCartItem extends Component {
    render() {
        let priceStr = `${this.props.qty} x $` + `${this.props.price}`;
        return (
            <li>
                <img src={this.props.image} alt=""/>
                <button type="button" className="close">�</button>
                <div className="overflow-h">
                    <span>{this.props.name}</span>
                    <small>{priceStr}</small>
                </div>
            </li>
        );
    }
}