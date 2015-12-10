import React from "react";

export default class RegisterAccount extends React.Component {
    render() {
        return (
            <div className="log-reg-v3 content-md margin-bottom-30">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 md-margin-bottom-50">
                            <h2 className="welcome-title">Welcome to Unify</h2>
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
                                <img className="img-responsive" src="assets/img/map.png" alt=""/>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <form id="sky-form4" className="log-reg-block sky-form">
                                <h2>Create New Account</h2>

                                <div className="login-input reg-input">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <section>
                                                <label className="input">
                                                    <input type="text" name="firstname" placeholder="First name" className="form-control"/>
                                                </label>
                                            </section>
                                        </div>
                                        <div className="col-sm-6">
                                            <section>
                                                <label className="input">
                                                    <input type="text" name="lastname" placeholder="Last name" className="form-control"/>
                                                </label>
                                            </section>
                                        </div>
                                    </div>
                                    <label className="select margin-bottom-15">
                                        <select name="gender" className="form-control">
                                            <option value="0" selected disabled>Gender</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </label>
                                    <div className="row margin-bottom-10">
                                        <div className="col-xs-6">
                                            <label className="select">
                                                <select name="month" className="form-control">
                                                    <option disabled="" selected="" value="0">Month</option>
                                                    <option>January</option>
                                                    <option>February</option>
                                                    <option>March</option>
                                                    <option>April</option>
                                                    <option>May</option>
                                                    <option>June</option>
                                                    <option>July</option>
                                                    <option>August</option>
                                                    <option>September</option>
                                                    <option>October</option>
                                                    <option>November</option>
                                                    <option>December</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="col-xs-3">
                                            <input type="text" name="day" placeholder="Day" className="form-control"/>
                                        </div>
                                        <div className="col-xs-3">
                                            <input type="text" name="year" placeholder="Year" className="form-control"/>
                                        </div>
                                    </div>
                                    <section>
                                        <label className="input">
                                            <input type="text" name="username" placeholder="Username" className="form-control"/>
                                        </label>
                                    </section>
                                    <section>
                                        <label className="input">
                                            <input type="email" name="email" placeholder="Email address" className="form-control"/>
                                        </label>
                                    </section>
                                    <section>
                                        <label className="input">
                                            <input type="password" name="password" placeholder="Password" id="password" className="form-control"/>
                                        </label>
                                    </section>
                                    <section>
                                        <label className="input">
                                            <input type="password" name="passwordConfirm" placeholder="Confirm password" className="form-control"/>
                                        </label>
                                    </section>
                                </div>

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
                                <button className="btn-u btn-u-sea-shop btn-block margin-bottom-20" type="submit">Create Account</button>
                            </form>

                            <div className="margin-bottom-20"></div>
                            <p className="text-center">Already you have an account? <a href="shop-ui-login.html">Sign In</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}