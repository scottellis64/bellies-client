import React from "react";

export default class BreadCrumbs extends React.Component {
    render() {
        return (
            <div className="container">
                <ul className="breadcrumb-v5">
                    <li><a href="#"><i className="fa fa-home"></i></a></li>
                    <li><a href="#">Products</a></li>
                    <li className="active">New</li>
                </ul>
            </div>
        );           
    }
}