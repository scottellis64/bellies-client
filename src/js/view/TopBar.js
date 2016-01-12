import React, {Component} from "react";
import {Link} from "react-router";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    account : state.account.toJS()
});

const mapDispatchToProps = (dispatch) => ({
});

class TopBar extends Component {
    render() {
        var accountDiv;
        if (this.props.account.loggedIn) {
            accountDiv = <li>Hello, {this.props.account.username}</li>
        } else {
            accountDiv = <li><Link key="logintop_link" to="/login">Login</Link> | <Link key="registertop_link" to="/register">Register</Link></li>;
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
