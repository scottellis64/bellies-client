import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as ProductActions from "../actions/ProductActions";
import * as FilterActions from "../actions/FilterActions";

import {
    BreadCrumbs,
    ProductFilters
} from "./index";

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    productActions : bindActionCreators(ProductActions, dispatch),
    filterActions : bindActionCreators(FilterActions, dispatch)
});

const mapStateToProps = (state) => ({
    products : state.products
});

class FilterGrid extends Component {
    static propTypes = {
        products : React.PropTypes.object,
        filterActions : React.PropTypes.object,
        productActions : React.PropTypes.object
    };

    render() {
        return (
            <div className="content container">
                <div className="row">

                    <ProductFilters />

                    <div className="col-md-9">
                        <div className="row margin-bottom-5">
                            <div className="col-sm-4 result-category">
                                <h2>Men</h2>
                                <small className="shop-bg-red badge-results">45 Results</small>
                            </div>
                            <div className="col-sm-8">
                                <ul className="list-inline clear-both">
                                    <li className="grid-list-icons">
                                        <a href="shop-ui-filter-list.html"><i className="fa fa-th-list"></i></a>
                                        <a href="shop-ui-filter-grid.html"><i className="fa fa-th"></i></a>
                                    </li>
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
                                </ul>
                            </div>
                        </div>

                        <div className="filter-results">
                            <div className="row illustration-v2 margin-bottom-30">
                                <div className="col-md-4">
                                    <div className="product-img product-img-brd">
                                        <a href="#"><img className="full-width img-responsive"
                                                         src="/bellies/resources/img/products/16.jpg" alt=""/></a>
                                        <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                        <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add
                                            to cart</a>

                                        <div className="shop-rgba-dark-green rgba-banner">New</div>
                                    </div>
                                    <div className="product-description product-description-brd margin-bottom-30">
                                        <div className="overflow-h margin-bottom-5">
                                            <div className="pull-left">
                                                <h4 className="title-price"><a
                                                    href="shop-ui-inner.html">Double-breasted</a></h4>
                                                <span className="gender text-uppercase">Men</span>
                                                <span className="gender">Suits - Blazers</span>
                                            </div>
                                            <div className="product-price">
                                                <span className="title-price">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline product-ratings">
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li className="like-icon"><a data-original-title="Add to wishlist"
                                                                         data-toggle="tooltip" data-placement="left"
                                                                         className="tooltips" href="#"><i
                                                className="fa fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-img product-img-brd">
                                        <a href="#"><img className="full-width img-responsive"
                                                         src="/bellies/resources/img/products/17.jpg" alt=""/></a>
                                        <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                        <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add
                                            to cart</a>
                                    </div>
                                    <div className="product-description product-description-brd margin-bottom-30">
                                        <div className="overflow-h margin-bottom-5">
                                            <div className="pull-left">
                                                <h4 className="title-price"><a
                                                    href="shop-ui-inner.html">Double-breasted</a></h4>
                                                <span className="gender text-uppercase">Men</span>
                                                <span className="gender">Suits - Blazers</span>
                                            </div>
                                            <div className="product-price">
                                                <span className="title-price">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline product-ratings">
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li className="like-icon"><a data-original-title="Add to wishlist"
                                                                         data-toggle="tooltip" data-placement="left"
                                                                         className="tooltips" href="#"><i
                                                className="fa fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-img product-img-brd">
                                        <a href="#"><img className="full-width img-responsive"
                                                         src="/bellies/resources/img/products/18.jpg" alt=""/></a>
                                        <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                        <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add
                                            to cart</a>
                                    </div>
                                    <div className="product-description product-description-brd margin-bottom-30">
                                        <div className="overflow-h margin-bottom-5">
                                            <div className="pull-left">
                                                <h4 className="title-price"><a
                                                    href="shop-ui-inner.html">Double-breasted</a></h4>
                                                <span className="gender text-uppercase">Men</span>
                                                <span className="gender">Suits - Blazers</span>
                                            </div>
                                            <div className="product-price">
                                                <span className="title-price">$95.00</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline product-ratings">
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li className="like-icon"><a data-original-title="Add to wishlist"
                                                                         data-toggle="tooltip" data-placement="left"
                                                                         className="tooltips" href="#"><i
                                                className="fa fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row illustration-v2 margin-bottom-30">
                                <div className="col-md-4">
                                    <div className="product-img product-img-brd">
                                        <a href="#"><img className="full-width img-responsive"
                                                         src="/bellies/resources/img/products/21.jpg" alt=""/></a>
                                        <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                        <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add
                                            to cart</a>
                                    </div>
                                    <div className="product-description product-description-brd margin-bottom-30">
                                        <div className="overflow-h margin-bottom-5">
                                            <div className="pull-left">
                                                <h4 className="title-price"><a
                                                    href="shop-ui-inner.html">Double-breasted</a></h4>
                                                <span className="gender text-uppercase">Men</span>
                                                <span className="gender">Suits - Blazers</span>
                                            </div>
                                            <div className="product-price">
                                                <span className="title-price">$95.00</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline product-ratings">
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li className="like-icon"><a data-original-title="Add to wishlist"
                                                                         data-toggle="tooltip" data-placement="left"
                                                                         className="tooltips" href="#"><i
                                                className="fa fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-img product-img-brd">
                                        <a href="#"><img className="full-width img-responsive"
                                                         src="/bellies/resources/img/products/22.jpg" alt=""/></a>
                                        <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                        <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add
                                            to cart</a>
                                    </div>
                                    <div className="product-description product-description-brd margin-bottom-30">
                                        <div className="overflow-h margin-bottom-5">
                                            <div className="pull-left">
                                                <h4 className="title-price"><a
                                                    href="shop-ui-inner.html">Double-breasted</a></h4>
                                                <span className="gender text-uppercase">Men</span>
                                                <span className="gender">Suits - Blazers</span>
                                            </div>
                                            <div className="product-price">
                                                <span className="title-price">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline product-ratings">
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li className="like-icon"><a data-original-title="Add to wishlist"
                                                                         data-toggle="tooltip" data-placement="left"
                                                                         className="tooltips" href="#"><i
                                                className="fa fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-img product-img-brd">
                                        <a href="#"><img className="full-width img-responsive"
                                                         src="/bellies/resources/img/products/23.jpg" alt=""/></a>
                                        <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                        <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add
                                            to cart</a>

                                        <div className="shop-rgba-red rgba-banner">Out of stock</div>
                                    </div>
                                    <div className="product-description product-description-brd">
                                        <div className="overflow-h margin-bottom-5">
                                            <div className="pull-left">
                                                <h4 className="title-price"><a
                                                    href="shop-ui-inner.html">Double-breasted</a></h4>
                                                <span className="gender text-uppercase">Men</span>
                                                <span className="gender">Suits - Blazers</span>
                                            </div>
                                            <div className="product-price">
                                                <span className="title-price">$95.00</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline product-ratings">
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li className="like-icon"><a data-original-title="Add to wishlist"
                                                                         data-toggle="tooltip" data-placement="left"
                                                                         className="tooltips" href="#"><i
                                                className="fa fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="row illustration-v2">
                                <div className="col-md-4">
                                    <div className="product-img product-img-brd">
                                        <a href="#"><img className="full-width img-responsive"
                                                         src="/bellies/resources/img/products/16.jpg" alt=""/></a>
                                        <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                        <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add
                                            to cart</a>

                                        <div className="shop-rgba-dark-green rgba-banner">New</div>
                                    </div>
                                    <div className="product-description product-description-brd margin-bottom-30">
                                        <div className="overflow-h margin-bottom-5">
                                            <div className="pull-left">
                                                <h4 className="title-price"><a
                                                    href="shop-ui-inner.html">Double-breasted</a></h4>
                                                <span className="gender text-uppercase">Men</span>
                                                <span className="gender">Suits - Blazers</span>
                                            </div>
                                            <div className="product-price">
                                                <span className="title-price">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline product-ratings">
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li className="like-icon"><a data-original-title="Add to wishlist"
                                                                         data-toggle="tooltip" data-placement="left"
                                                                         className="tooltips" href="#"><i
                                                className="fa fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-img product-img-brd">
                                        <a href="#"><img className="full-width img-responsive"
                                                         src="/bellies/resources/img/products/17.jpg" alt=""/></a>
                                        <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                        <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add
                                            to cart</a>
                                    </div>
                                    <div className="product-description product-description-brd margin-bottom-30">
                                        <div className="overflow-h margin-bottom-5">
                                            <div className="pull-left">
                                                <h4 className="title-price"><a
                                                    href="shop-ui-inner.html">Double-breasted</a></h4>
                                                <span className="gender text-uppercase">Men</span>
                                                <span className="gender">Suits - Blazers</span>
                                            </div>
                                            <div className="product-price">
                                                <span className="title-price">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline product-ratings">
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li className="like-icon"><a data-original-title="Add to wishlist"
                                                                         data-toggle="tooltip" data-placement="left"
                                                                         className="tooltips" href="#"><i
                                                className="fa fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="product-img product-img-brd">
                                        <a href="#"><img className="full-width img-responsive"
                                                         src="/bellies/resources/img/products/18.jpg" alt=""/></a>
                                        <a className="product-review" href="shop-ui-inner.html">Quick review</a>
                                        <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add
                                            to cart</a>
                                    </div>
                                    <div className="product-description product-description-brd margin-bottom-30">
                                        <div className="overflow-h margin-bottom-5">
                                            <div className="pull-left">
                                                <h4 className="title-price"><a
                                                    href="shop-ui-inner.html">Double-breasted</a></h4>
                                                <span className="gender text-uppercase">Men</span>
                                                <span className="gender">Suits - Blazers</span>
                                            </div>
                                            <div className="product-price">
                                                <span className="title-price">$95.00</span>
                                            </div>
                                        </div>
                                        <ul className="list-inline product-ratings">
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating-selected fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li><i className="rating fa fa-star"></i></li>
                                            <li className="like-icon"><a data-original-title="Add to wishlist"
                                                                         data-toggle="tooltip" data-placement="left"
                                                                         className="tooltips" href="#"><i
                                                className="fa fa-heart"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <ul className="pagination pagination-v2">
                                <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                                <li><a href="#">1</a></li>
                                <li className="active"><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterGrid);
