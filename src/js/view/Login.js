import React, {Component} from "react";
import {Link} from "react-router";
import {bindActionCreators} from "redux";
import * as AccountActions from "../actions/AccountActions";
import {connect} from "react-redux";
import {EMAIL} from "../constants/ValidationTypes";

import {
    FormElement,
    FormBuilder
} from "../form/index";

const mapDispatchToProps = (dispatch) => ({
    accountActions: bindActionCreators(AccountActions, dispatch)
});

const mapStateToProps = (state) => ({
    account: state.account.toJS()
});

function doLogin(evt) {
    evt.preventDefault();
    return false;
}

class WelcomeSection extends Component {
    render() {
        return (
            <div className="col-md-7 md-margin-bottom-50">
                <h2 className="welcome-title">Welcome to Bellies Bangles</h2>

                <p>Suspendisse et tincidunt ipsum, et dignissim urna. Vestibulum nisl tortor, gravida at
                    magna et, suscipit vehicula massa.</p><br/>

                <div className="info-block-v2">
                    <i className="icon icon-layers"></i>

                    <div className="info-block-in">
                        <h3>Pellentesque vulputate</h3>

                        <p>Vestibulum non ex volutpat, sodales diam sit amet, semper nunc. Integer sed nibh
                            commodo, tincidunt nisi.</p>
                    </div>
                </div>
                <div className="info-block-v2">
                    <i className="icon icon-settings"></i>

                    <div className="info-block-in">
                        <h3>Curabitur tincidunt</h3>

                        <p>Vestibulum non ex volutpat, sodales diam sit amet, semper nunc. Integer sed nibh
                            commodo, tincidunt nisi.</p>
                    </div>
                </div>
                <div className="info-block-v2">
                    <i className="icon icon-paper-plane"></i>

                    <div className="info-block-in">
                        <h3>Aenean condimentum</h3>

                        <p>Vestibulum non ex volutpat, sodales diam sit amet, semper nunc. Integer sed nibh
                            commodo, tincidunt nisi.</p>
                    </div>
                </div>
            </div>
        )
    }
}

//
// Not using this right now.
// The content below the root div tag here was just below the login button in the form
//
class AlternateLogins extends Component {
    render() {
        return (
            <div>
                <div className="border-wings">
                    <span>or</span>
                </div>

                <div className="row columns-space-removes">
                    <div className="col-lg-6 margin-bottom-10">
                        <button type="button" className="btn-u btn-u-md btn-u-fb btn-block"><i
                            className="fa fa-facebook"></i> Facebook Log In
                        </button>
                    </div>
                    <div className="col-lg-6">
                        <button type="button" className="btn-u btn-u-md btn-u-tw btn-block"><i
                            className="fa fa-twitter"></i> Twitter Log In
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const formBuilderDefinitions = {
    templates : {
        input : function(input) {
            return (
                <section key={input.key}>
                    <label className="input login-input">
                        <div className={input.groupClasses}>
                            <span className="input-group-addon"><i className={"fa fa-" + input.fieldClass}></i></span>
                            <input {...input.props}/>
                        </div>
                        {input.errorElem}
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
        fieldClass: "user",
        format : {
            required : true,
            validations : [{type : EMAIL}]
        }
    }, {
        key : "login_password",
        name: "password",
        type: "password",
        template : "input",
        placeholder: "Password",
        className : "form-control",
        fieldClass: "lock",
        format : {
            required : true
        }
    }]
};

class Login extends Component {
    static title = "Login";
    static path = "/login";

    submitAction() {
        this.props.accountActions.login(this.props.account.email, this.props.account.password);
    }

    render() {
        return (
            <div className="log-reg-v3 content-md">
                <div className="container">
                    <div className="row">

                        <WelcomeSection/>

                        <div className="col-md-5">
                            <h2>Log in to your account</h2>

                            <FormBuilder fieldDefs={formBuilderDefinitions} entity={this.props.account} actions={this.props.accountActions}
                                submitAction={() => this.submitAction()}/>

                            <div className="margin-bottom-20"></div>

                            <p className="text-center">Don't have account yet? Learn more and
                                <Link key="register_login" to="/register"> Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
