import React, {Component} from "react";

import "/css/log-reg-v3.css!";
import "/css/animate.css!";
import "/css/line-icons/line-icons.css!";

export default class Login extends Component {
    static title = "Login";
    static path = "/login";

    render() {
        return (
            <div className="log-reg-v3 content-md">
                <div className="container">
                    <div className="row">

                        <div className="col-md-7 md-margin-bottom-50">
                            <h2 className="welcome-title">Welcome to Unify</h2>
                            <p>Suspendisse et tincidunt ipsum, et dignissim urna. Vestibulum nisl tortor, gravida at magna et, suscipit vehicula massa.</p><br/>
                            <div className="info-block-v2">
                                <i className="icon icon-layers"></i>
                                <div className="info-block-in">
                                    <h3>Pellentesque vulputate</h3>
                                    <p>Vestibulum non ex volutpat, sodales diam sit amet, semper nunc. Integer sed nibh commodo, tincidunt nisi.</p>
                                </div>
                            </div>
                            <div className="info-block-v2">
                                <i className="icon icon-settings"></i>
                                <div className="info-block-in">
                                    <h3>Curabitur tincidunt</h3>
                                    <p>Vestibulum non ex volutpat, sodales diam sit amet, semper nunc. Integer sed nibh commodo, tincidunt nisi.</p>
                                </div>
                            </div>
                            <div className="info-block-v2">
                                <i className="icon icon-paper-plane"></i>
                                <div className="info-block-in">
                                    <h3>Aenean condimentum</h3>
                                    <p>Vestibulum non ex volutpat, sodales diam sit amet, semper nunc. Integer sed nibh commodo, tincidunt nisi.</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-5">
                            <form id="sky-form1" className="log-reg-block sky-form">
                                <h2>Log in to your account</h2>

                                <section>
                                    <label className="input login-input">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                            <input type="email" placeholder="Email Address" name="email" className="form-control"/>
                                        </div>
                                    </label>
                                </section>

                                <section>
                                    <label className="input login-input no-border-top">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                            <input type="password" placeholder="Password" name="password" className="form-control"/>
                                        </div>
                                    </label>
                                </section>

                                <div className="row margin-bottom-5">
                                    <div className="col-xs-6">
                                        <label className="checkbox">
                                            <input type="checkbox" name="checkbox"/>
                                            <i></i>
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="col-xs-6 text-right">
                                        <a href="#">Forget your Password?</a>
                                    </div>
                                </div>

                                <button className="btn-u btn-u-sea-shop btn-block margin-bottom-20" type="submit">Log in</button>

                                <div className="border-wings">
                                    <span>or</span>
                                </div>

                                <div className="row columns-space-removes">
                                    <div className="col-lg-6 margin-bottom-10">
                                        <button type="button" className="btn-u btn-u-md btn-u-fb btn-block"><i className="fa fa-facebook"></i> Facebook Log In</button>
                                    </div>
                                    <div className="col-lg-6">
                                        <button type="button" className="btn-u btn-u-md btn-u-tw btn-block"><i className="fa fa-twitter"></i> Twitter Log In</button>
                                    </div>
                                </div>
                            </form>

                            <div className="margin-bottom-20"></div>
                            <p className="text-center">Don't have account yet? Learn more and <a href="shop-ui-register.html">Sign Up</a></p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}