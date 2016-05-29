import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as AccountActions from "../actions/AccountActions";

const mapStateToProps = (state) => ({
    account : state.account.toJS(),
    isLoginPage : state.router.location.pathname.endsWith("login")
});

const mapDispatchToProps = (dispatch) => ({
    accountActions: bindActionCreators(AccountActions, dispatch)
});

class TopBar extends Component {
    render() {
        var accountDiv;
        if (this.props.account.loggedIn) {
            accountDiv = <li>Hello, {this.props.account.email} | <div onClick={() => this.props.accountActions.logout()}>Logout</div></li>
        } else {
            const registerPart = <Link key="registertop_link" to="/register">Register</Link>;

            accountDiv = this.props.isLoginPage ?
                <li>{registerPart}</li> :
                <li><Link key="logintop_link" to="/login">Login</Link> | {registerPart}</li>
        }

        return (
            <div className="topbar-v3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6"></div>
                        <div className="col-sm-6">
                            <ul className="list-inline right-topbar pull-right">
                                ${accountDiv}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
