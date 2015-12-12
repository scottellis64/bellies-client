import React from "react";
import ShoppingCart from "./ShoppingCart";
import MenuBar from "./MenuBar";

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default mega-menu" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target=".navbar-responsive-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <a className="navbar-brand" href="index.html">
                            <img id="logo-header" src="/bellies/img/BelliesBirdSolo.png" alt="Logo" height="50"/>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse navbar-responsive-collapse">
                        <ShoppingCart contents={this.props.cart} actions={this.props.shoppingCartActions}/>
                        <MenuBar menudata={this.props.menudata}/>
                    </div>
                </div>
            </div>
        );
    }
}