import React, {Component} from "react";
import {Link} from "react-router";

export default class FilterGridViewController extends Component {
    render() {
        return (
            <div className="row margin-bottom-5">
                <div className="col-sm-4 result-category">
                    <h2></h2>
                    <small className="shop-bg-red badge-results">{this.props.count} Results</small>
                </div>
                <div className="col-sm-8">
                    <ul className="list-inline clear-both">
                        <li className="grid-list-icons">
                            <Link key="link_to_fgrid" to="/fgrid"><i className="fa fa-th-list"></i></Link>
                            <Link key="link_to_flist" to="/flist"><i className="fa fa-th"></i></Link>
                        </li>

                        {/*
                         <li className="sort-list-btn">
                         <h3>Sort By :</h3>

                         <div className="btn-group">
                         <button type="button" className="btn btn-default dropdown-toggle"
                         data-toggle="dropdown">
                         Popularity <span className="caret"></span>
                         </button>
                         <ul className="dropdown-menu" role="menu">
                         <li><a href="#">All</a></li>
                         <li><a href="#">Best Sales</a></li>
                         <li><a href="#">Top Last Week Sales</a></li>
                         <li><a href="#">New Arrived</a></li>
                         </ul>
                         </div>
                         </li>
                         <li className="sort-list-btn">
                         <h3>Show :</h3>

                         <div className="btn-group">
                         <button type="button" className="btn btn-default dropdown-toggle"
                         data-toggle="dropdown">
                         20 <span className="caret"></span>
                         </button>
                         <ul className="dropdown-menu" role="menu">
                         <li><a href="#">All</a></li>
                         <li><a href="#">10</a></li>
                         <li><a href="#">5</a></li>
                         <li><a href="#">3</a></li>
                         </ul>
                         </div>
                         </li>
                         */}
                    </ul>
                </div>
            </div>
        );
    }
}