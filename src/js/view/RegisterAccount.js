import React, {Component} from "react";
import {Link} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {EMAIL, EQUALS_FIELD, DAY, MONTH, YEAR} from "../constants/ValidationTypes";

import * as AccountActions from "../actions/AccountActions";

const mapStateToProps = (state) => ({
    account : state.account.toJS()
});

const mapDispatchToProps = (dispatch) => ({
    accountActions : bindActionCreators(AccountActions, dispatch)
});

const formBuilderDefinitions = {
    templates : {
        input : function(input) {
            return (
                <section key={input.key}>
                    <label className="input login-input">
                        <div className="input-group">
                            <span className="input-group-addon"><i className={"fa fa-" + input.fieldClass}></i></span>
                            <input {...input.props}/>
                        </div>
                    </label>
                </section>
            );
        },
        checkbox : function(checkbox) {
            return (
                <div className="row margin-bottom-5">
                    <div className="col-xs-6">
                        <label className="checkbox">
                            <input name="checkbox" field="rememberMe"/>
                            <i></i>
                            Remember me
                        </label>
                    </div>
                    <div className="col-xs-6 text-right">
                        <a href="#">Forget your Password?</a>
                    </div>
                </div>
            )
        }
    },
    fields: [{
        key : "login_email",
        name: "email",
        type: "email",
        template : "input",
        placeholder: "Email Address",
        className : "form-control",
        fieldClass: "user"
    }, {
        key : "login_password",
        name: "password",
        type: "password",
        template : "input",
        placeholder: "Password",
        className : "form-control",
        fieldClass: "lock"
    }],

    format : {
        firstName : {required : true},
        lastName : {required : true},
        email : {
            required : true,
            validations : [{
                type : EMAIL
            }]
        },
        password : {required : true},
        passwordConfirm : {
            validations : [{
                type : EQUALS_FIELD,
                config : {
                    field : "passwordConfirm"
                }
            }]
        },
        month : {validations : [{
            type : MONTH
        }]},
        day : {validations : [{
            type : DAY
        }]},
        year : {validations : [{
            type : YEAR
        }]}
    }

};


class RegisterAccount extends Component {
    makeValueLink(field) {
        let account = this.props.account;
        let onChange = this.props.accountActions.setAccountField;

        return {
            value : this.props.account[field],

            requestChange : function(accountValue) {
                account[field] = accountValue;
                onChange(account);
            }
        }
    }

    render() {
        return (
            <div className="log-reg-v3 content-md margin-bottom-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 md-margin-bottom-50">
                            <h2 className="welcome-title">Welcome to Bellies Bangles</h2>
                            <p>Suspendisse et tincidunt ipsum, et dignissim urna. Vestibulum nisl tortor, gravida at magna et, suscipit vehicula massa.</p><br/>
                            <div className="row margin-bottom-50">
                                <div className="col-sm-4 md-margin-bottom-20">
                                    <div className="site-statistics">
                                        <span>20,039</span>
                                        <small>Products</small>
                                    </div>
                                </div>
                                <div className="col-sm-4 md-margin-bottom-20">
                                    <div className="site-statistics">
                                        <span>54,283</span>
                                        <small>Reviews</small>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="site-statistics">
                                        <span>376k</span>
                                        <small>Sale</small>
                                    </div>
                                </div>
                            </div>
                            <div className="members-number">
                                <h3>Join more than <span className="shop-green">13,000</span> members worldwide</h3>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <h2>Create New Account</h2>

                            <div className="login-input reg-input">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <section>
                                            <label className="input">
                                                <input type="text" name="firstname" placeholder="First name" className="form-control"
                                                       valueLink={this.makeValueLink("firstName")}/>
                                            </label>
                                        </section>
                                    </div>
                                    <div className="col-sm-6">
                                        <section>
                                            <label className="input">
                                                <input type="text" name="lastname" placeholder="Last name" className="form-control"
                                                       valueLink={this.makeValueLink("lastName")}/>
                                            </label>
                                        </section>
                                    </div>
                                </div>
                                <label className="select margin-bottom-15">
                                    <select name="gender" className="form-control" valueLink={this.makeValueLink("gender")}>
                                        <option value="0">Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Other</option>
                                    </select>
                                </label>
                                <div className="row margin-bottom-10">
                                    <div className="col-xs-6">
                                        <label className="select">
                                            <select name="month" className="form-control"
                                                    valueLink={this.makeValueLink("month")}>
                                                <option value="-1">Month</option>
                                                <option value="1">January</option>
                                                <option value="2">February</option>
                                                <option value="3">March</option>
                                                <option value="4">April</option>
                                                <option value="5">May</option>
                                                <option value="6">June</option>
                                                <option value="7">July</option>
                                                <option value="8">August</option>
                                                <option value="9">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                        </label>
                                    </div>
                                    <div className="col-xs-3">
                                        <input type="text" name="day" placeholder="Day" className="form-control"
                                               valueLink={this.makeValueLink("day")}/>
                                    </div>
                                    <div className="col-xs-3">
                                        <input type="text" name="year" placeholder="Year" className="form-control"
                                               valueLink={this.makeValueLink("year")}/>
                                    </div>
                                </div>
                                <section>
                                    <label className="input">
                                        <input type="email" name="email" placeholder="Email address" className="form-control"
                                               valueLink={this.makeValueLink("email")}/>
                                    </label>
                                </section>
                                <section>
                                    <label className="input">
                                        <input type="password" name="password" placeholder="Password" id="password" className="form-control"
                                               valueLink={this.makeValueLink("password")}/>
                                    </label>
                                </section>
                                <section>
                                    <label className="input">
                                        <input type="password" name="passwordConfirm" placeholder="Confirm password" className="form-control"
                                               valueLink={this.makeValueLink("passwordConfirm")}/>
                                    </label>
                                </section>
                            </div>

                            {/*
                            <label className="checkbox margin-bottom-10">
                                <input type="checkbox" name="checkbox"/>
                                <i></i>
                                Subscribe to our newsletter to get the latest offers
                            </label>
                            <label className="checkbox margin-bottom-20">
                                <input type="checkbox" name="checkbox"/>
                                <i></i>
                                I have read agreed with the <a href="#">terms &amp; conditions</a>
                            </label>
                            */}
                            <button className="btn-u btn-u-sea-shop btn-block margin-bottom-20"
                                onClick={() => {this.props.accountActions.createAccount(this.state)}}>Create Account</button>

                            <div className="margin-bottom-20"></div>
                            <p className="text-center">Already you have an account? <Link key="login_register" to="/login">Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAccount);
