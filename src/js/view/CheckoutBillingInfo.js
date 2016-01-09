import React, {Component} from "react";

import {
    CheckoutWizardTabs,
    CheckoutCartTotals
} from "./index";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as BillingInfoActions from "../actions/BillingInfoActions";

const mapStateToProps = (state) => ({
    billingAddress : state.billingInfo.get("billingAddress").toJS(),
    shippingAddress : state.billingInfo.get("shippingAddress").toJS(),
    shipToBillingAddress : state.billingInfo.get("shipToBillingAddress")
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    billingInfoActions : bindActionCreators(BillingInfoActions, dispatch)
});

class Address extends Component {

    makeValueLink(field) {
        let address = this.props.address;
        let onChange = this.props.onChange;

        return {
            value : this.props.address[field],

            requestChange : function(addrValue) {
                address[field] = addrValue;
                onChange(address);
            }
        }
    }

    render() {
        const label = (this.props.isBilling ? "Billing" : "Shipping") + " Address";

        const shipToBillingElement = this.props.isBilling ? (
                <label className="checkbox text-left">
                    <input type="checkbox" name="shipToBillingAddress"
                           checkedLink={this.makeValueLink("shipToBillingAddress")}/>
                    <i></i>
                    Ship item to the above billing address
                </label>
        ) : undefined;

        return (
            <div className="col-md-6 md-margin-bottom-40">
                <h2 className="title-type">{label}</h2>

                <div className="billing-info-inputs checkbox-list">
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" placeholder="First Name"
                                   className="form-control required"
                                   valueLink={this.makeValueLink("firstName")}/>
                            <input type="text" placeholder="Email"
                                   className="form-control required email"
                                   valueLink={this.makeValueLink("email")}/>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" placeholder="Last Name"
                                   className="form-control required"
                                   valueLink={this.makeValueLink("lastName")}/>
                            <input type="text" placeholder="Phone"
                                   className="form-control required"
                                   valueLink={this.makeValueLink("phone")}/>
                        </div>
                    </div>

                    <input type="text" placeholder="Address Line 1"
                           className="form-control required"
                           valueLink={this.makeValueLink("addr1")}/>
                    <input type="text" placeholder="Address Line 2"
                           className="form-control required"
                           valueLink={this.makeValueLink("addr2")}/>

                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" placeholder="City"
                                   className="form-control required"
                                   valueLink={this.makeValueLink("city")}/>
                        </div>
                        <div className="col-sm-6">
                            <input type="text" placeholder="Zip/Postal Code"
                                   className="form-control required"
                                   valueLink={this.makeValueLink("postalCode")}/>
                        </div>
                    </div>

                    {shipToBillingElement}
                </div>
            </div>
        );
    }
}

class CheckoutBillingInfo extends Component {
    render() {
        return (
            <div className="content-md margin-bottom-30">
                <div className="container">
                    <CheckoutWizardTabs selected="billinginfo"/>
                    <form className="shopping-cart" action="#">
                        <section className="billing-info">
                            <div className="row">
                                <Address isBilling={true} address={this.props.billingAddress} onChange={this.props.billingInfoActions.updateBillingAddress}/>
                                <Address isBilling={false} address={this.props.shippingAddress} onChange={this.props.billingInfoActions.updateShippingAddress}/>
                            </div>
                        </section>
                        <CheckoutCartTotals/>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutBillingInfo);
