import React, {Component} from "react";

import {
    CheckoutWizardTabs,
    CheckoutCartTotals
} from "./index";

export default class CheckoutPaymentMethod extends Component {
    render() {
        return (
            <div className="content-md margin-bottom-30">
                <div className="container">
                    <CheckoutWizardTabs selected="paymentmethod"/>
                    <form className="shopping-cart" action="#">
                        <section>
                            <div className="row">
                                <div className="col-md-6 md-margin-bottom-50">
                                    <h2 className="title-type">Choose a payment method</h2>
                                    <div className="accordion-v2">
                                        <div className="panel-group" id="accordion">
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion"
                                                           href="#collapseOne">
                                                            <i className="fa fa-credit-card"></i>
                                                            Credit or Debit Card
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse in">
                                                    <div className="panel-body cus-form-horizontal">
                                                        <div className="form-group">
                                                            <label className="col-sm-4 no-col-space control-label">Cardholder
                                                                Name</label>

                                                            <div className="col-sm-8">
                                                                <input type="text" className="form-control required"
                                                                       name="cardholder" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-4 no-col-space control-label">Card
                                                                Number</label>

                                                            <div className="col-sm-8">
                                                                <input type="text" className="form-control required"
                                                                       name="cardnumber" placeholder=""/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-4 no-col-space control-label">Payment
                                                                Types</label>

                                                            <div className="col-sm-8">
                                                                <ul className="list-inline payment-type">
                                                                    <li><i className="fa fa-cc-paypal"></i></li>
                                                                    <li><i className="fa fa-cc-visa"></i></li>
                                                                    <li><i className="fa fa-cc-mastercard"></i></li>
                                                                    <li><i className="fa fa-cc-discover"></i></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-4">Expiration Date</label>

                                                            <div className="col-sm-8 input-small-field">
                                                                <input type="text" name="mm" placeholder="MM"
                                                                       className="form-control required sm-margin-bottom-20"/>
                                                                <span className="slash">/</span>
                                                                <input type="text" name="yy" placeholder="YY"
                                                                       className="form-control required"/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-4 no-col-space control-label">CSC</label>

                                                            <div className="col-sm-8 input-small-field">
                                                                <input type="text" name="number" placeholder=""
                                                                       className="form-control required"/>
                                                                <a href="#">What's this?</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                                            <i className="fa fa-paypal"></i>
                                                            Pay with PayPal
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse">
                                                    <div className="content margin-left-10">
                                                        <a href="#"><img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_150x38.png"alt="PayPal"/></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h2 className="title-type">Frequently asked questions</h2>
                                        <div className="accordion-v2 plus-toggle">
                                            <div className="panel-group" id="accordion-v2">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h4 className="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion-v2"
                                                               href="#collapseOne-v2">
                                                                What payments methods can I use?
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne-v2" className="panel-collapse collapse in">
                                                        <div className="panel-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Nam hendrerit, felis vel tincidunt sodales, urna metus
                                                            rutrum leo, sit amet finibus velit ante nec lacus. Cras
                                                            erat nunc, pulvinar nec leo at, rhoncus elementum orci.
                                                            Nullam ut sapien ultricies, gravida ante ut, ultrices
                                                            nunc.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h4 className="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion-v2"
                                                               href="#collapseTwo-v2">
                                                                Can I use gift card to pay for my purchase?
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseTwo-v2" className="panel-collapse collapse">
                                                        <div className="panel-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Nam hendrerit, felis vel tincidunt sodales, urna metus
                                                            rutrum leo, sit amet finibus velit ante nec lacus. Cras
                                                            erat nunc, pulvinar nec leo at, rhoncus elementum orci.
                                                            Nullam ut sapien ultricies, gravida ante ut, ultrices
                                                            nunc.
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h4 className="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion-v2"
                                                               href="#collapseThree-v2">
                                                                Will I be charged when I place my order?
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree-v2" className="panel-collapse collapse">
                                                        <div className="panel-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Nam hendrerit, felis vel tincidunt sodales, urna metus
                                                            rutrum leo, sit amet finibus velit ante nec lacus. Cras
                                                            erat nunc, pulvinar nec leo at, rhoncus elementum orci.
                                                            Nullam ut sapien ultricies, gravida ante ut, ultrices
                                                            nunc.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h4 className="panel-title">
                                                            <a data-toggle="collapse" data-parent="#accordion-v2"
                                                               href="#collapseFour-v2">
                                                                How long will it take to get my order?
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseFour-v2" className="panel-collapse collapse">
                                                        <div className="panel-body">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Nam hendrerit, felis vel tincidunt sodales, urna metus
                                                            rutrum leo, sit amet finibus velit ante nec lacus. Cras
                                                            erat nunc, pulvinar nec leo at, rhoncus elementum orci.
                                                            Nullam ut sapien ultricies, gravida ante ut, ultrices
                                                            nunc.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <CheckoutCartTotals/>
                    </form>
               </div>
            </div>
        );
    }
}