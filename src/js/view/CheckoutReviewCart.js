import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as ShoppingCartActions from "../actions/ShoppingCartActions";

import {
    CheckoutWizardTabs,
    CheckoutCartTotals
} from "./index";


class ShoppingCartItem extends Component {
    static propTypes = {
        shoppingCartActions : React.PropTypes.object,
        image : React.PropTypes.string,
        name : React.PropTypes.string,
        price : React.PropTypes.string,
        total : React.PropTypes.number,
        qty : React.PropTypes.number
    };

    render() {
        return (
            <tr>
                <td className="product-in-table">
                    <img className="img-responsive" src={this.props.image} alt=""/>

                    <div className="product-it-in">
                        <h3>{this.props.name}</h3>
                        <span>Description?</span>
                    </div>
                </td>
                <td>{this.props.price}</td>
                <td>
                    <button type='button' className="quantity-button"
                            onClick={() => this.props.shoppingCartActions.updateItem(this.props.id, this.props.qty-1)}
                            value='-'>-
                    </button>
                    <input type='text' className="quantity-field" value={this.props.qty}/>
                    <button type='button' className="quantity-button"
                            onClick={() => this.props.shoppingCartActions.updateItem(this.props.id, this.props.qty+1)}
                            value='+'>+
                    </button>
                </td>
                <td className="shop-red">{this.props.total}</td>
                <td>
                    <button type="button" className="close" onClick={() => this.props.shoppingCartActions.deleteItem(this.props.id)}>
                        <span>&times;</span><span className="sr-only">Close</span>
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => ({
    cart : state.shoppingcart
});

const mapDispatchToProps = (dispatch) => ({
    shoppingCartActions : bindActionCreators(ShoppingCartActions, dispatch)
});

class CheckoutReviewCart extends Component {
    static propTypes = {
        shoppingCartActions : React.PropTypes.object
    };

    render() {
        let itemsById = this.props.cart.get("itemsById");
        var itemNodes = this.props.cart.get("items").map(id => {
            var item = itemsById.get(id);
            return (
                <ShoppingCartItem key={item.get("key")} id={item.get("key")} name={item.get("name")} qty={item.get("qty")}
                                  image={item.get("image")} price={item.get("price")} total={item.get("total")}
                                  shoppingCartActions={this.props.shoppingCartActions}/>
            );
        });

        return (
            <div className="content-md margin-bottom-30">
                <div className="container">

                    <CheckoutWizardTabs selected="cartitems"/>

                    <form className="shopping-cart" action="#">
                        <div>
                            <section>
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {itemNodes}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>

                        <CheckoutCartTotals/>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutReviewCart);
