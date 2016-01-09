import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as ShoppingCartActions from "../actions/ShoppingCartActions";

const mapStateToProps = (state) => ({
    cart : state.shoppingcart
});

const mapDispatchToProps = (dispatch) => ({
    shoppingCartActions : bindActionCreators(ShoppingCartActions, dispatch)
});

class CheckoutCartTotals extends Component {
    render() {
        return (
            <div className="coupon-code">
                <div className="row">
                    <div className="col-sm-4 sm-margin-bottom-30">
                        <h3>Discount Code</h3>

                        <p>Enter your coupon code</p>
                        <input className="form-control margin-bottom-10" name="code" type="text"/>
                        <button type="button" className="btn-u btn-u-sea-shop">Apply Coupon</button>
                    </div>
                    <div className="col-sm-3 col-sm-offset-5">
                        <ul className="list-inline total-result">
                            <li>
                                <h4>Subtotal:</h4>

                                <div className="total-result-in">
                                    <span>{`$${this.props.cart.get("subtotal")}`}</span>
                                </div>
                            </li>
                            <li>
                                <h4>Shipping:</h4>

                                <div className="total-result-in">
                                    <span className="text-right">- - - -</span>
                                </div>
                            </li>
                            <li className="divider"></li>
                            <li className="total-price">
                                <h4>Total:</h4>

                                <div className="total-result-in">
                                    <span>{`$${this.props.cart.get("subtotal")}`}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutCartTotals);
