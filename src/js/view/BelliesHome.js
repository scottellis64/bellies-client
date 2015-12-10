import React, {Component}       from "react";
import {connect}                from "react-redux";
import {TopBar, NavBar, Banner} from "./index";
import {bindActionCreators}     from "redux";
import * as ShoppingCartActions from "../actions/ShoppingCartActions";

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
    menudata : state.menudata,
    cart : state.shoppingcart
});

const mapDispatchToProps = (dispatch) => ({
    shoppingCartActions : bindActionCreators(ShoppingCartActions, dispatch)
});

class BelliesHome extends Component {
    static propTypes = {
        shoppingCartActions : React.PropTypes.object,
        productActions : React.PropTypes.object,
        menudata  : React.PropTypes.object,
        cart : React.PropTypes.object,
        body : React.PropTypes.object
    };

    render() {
        return (
            <div className="belliesAppContainer">
                <div className="wrapper">
                    <div className="header-v5 header-static">
                        <TopBar />
                        <NavBar menudata={this.props.menudata} cart={this.props.cart}
                                shoppingCartActions={this.props.shoppingCartActions}/>
                    </div>
                </div>
                {this.props.body || <Banner/>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BelliesHome);

