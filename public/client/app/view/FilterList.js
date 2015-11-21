import React from "react";
import { BreadCrumbs } from "./index";

export default class FilterList extends React.Component {
    render() {
        return (
            <div className="content container">
                <div className="row">
                    <div className="col-md-3 filter-by-block md-margin-bottom-60">
                        <h1>Filter By</h1>
                        <div className="panel-group" id="accordion">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h2 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                            Brands
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </h2>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <ul className="list-unstyled checkbox-list">
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" checked />
                                                    <i></i>
                                                    Calvin Klein
                                                    <small><a href="#">(23)</a></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" checked />
                                                    <i></i>
                                                    Gucci
                                                    <small><a href="#">(4)</a></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" />
                                                    <i></i>
                                                    Adidas
                                                    <small><a href="#">(11)</a></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" />
                                                    <i></i>
                                                    Puma
                                                    <small><a href="#">(3)</a></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" />
                                                    <i></i>
                                                    Zara
                                                    <small><a href="#">(87)</a></small>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel-group" id="accordion-v2">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h2 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion-v2" href="#collapseTwo">
                                            Categories
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <ul className="list-unstyled checkbox-list">
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" checked />
                                                    <i></i>
                                                    Clothes
                                                    <small><a href="#">(23)</a></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" checked />
                                                    <i></i>
                                                    Glasses
                                                    <small><a href="#">(4)</a></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" />
                                                    <i></i>
                                                    Shoes
                                                    <small><a href="#">(11)</a></small>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel-group" id="accordion-v3">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h2 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion-v3" href="#collapseThree">
                                            Size
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </h2>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <ul className="list-unstyled checkbox-list">
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" />
                                                    <i></i>
                                                    S
                                                    <small><a href="#">(23)</a></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" checked />
                                                    <i></i>
                                                    M
                                                    <small><a href="#">(4)</a></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" />
                                                    <i></i>
                                                    L
                                                    <small><a href="#">(11)</a></small>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="checkbox">
                                                    <input type="checkbox" name="checkbox" />
                                                    <i></i>
                                                    XL
                                                    <small><a href="#">(3)</a></small>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel-group" id="accordion-v4">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h2 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion-v4" href="#collapseFour">
                                            Price
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </h2>
                                </div>
                                <div id="collapseFour" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <div className="slider-snap"></div>
                                        <p className="slider-snap-text">
                                            <span className="slider-snap-value-lower"></span>
                                            <span className="slider-snap-value-upper"></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel-group" id="accordion-v5">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h2 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion-v5" href="#collapseFive">
                                            Color
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </h2>
                                </div>
                                <div id="collapseFive" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <ul className="list-inline product-color-list">
                                            <li><a href="#"><img src="assets/img/colors/01.jpg" alt=""/></a></li>
                                            <li><a href="#"><img src="assets/img/colors/02.jpg" alt=""/></a></li>
                                            <li><a href="#"><img src="assets/img/colors/03.jpg" alt=""/></a></li>
                                            <li><a href="#"><img src="assets/img/colors/04.jpg" alt=""/></a></li>
                                            <li><a href="#"><img src="assets/img/colors/05.jpg" alt=""/></a></li>
                                            <li><a href="#"><img src="assets/img/colors/06.jpg" alt=""/></a></li>
                                            <li><a href="#"><img src="assets/img/colors/07.jpg" alt=""/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="panel-group margin-bottom-30" id="accordion-v6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h2 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion-v6" href="#collapseSix">
                                            Rating
                                            <i className="fa fa-angle-down"></i>
                                        </a>
                                    </h2>
                                </div>
                                <div id="collapseSix" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                        <div className="stars-ratings stars-ratings-label">
                                            <input type="radio" name="stars-rating" id="stars-rating-5"/>
                                            <label htmlFor="stars-rating-5"><i className="fa fa-star"></i></label>
                                            <input type="radio" name="stars-rating" id="stars-rating-4"/>
                                            <label htmlFor="stars-rating-4"><i className="fa fa-star"></i></label>
                                            <input type="radio" name="stars-rating" id="stars-rating-3"/>
                                            <label htmlFor="stars-rating-3"><i className="fa fa-star"></i></label>
                                            <input type="radio" name="stars-rating" id="stars-rating-2"/>
                                            <label htmlFor="stars-rating-2"><i className="fa fa-star"></i></label>
                                            <input type="radio" name="stars-rating" id="stars-rating-1"/>
                                            <label htmlFor="stars-rating-1"><i className="fa fa-star"></i></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn-u btn-brd btn-brd-hover btn-u-lg btn-u-sea-shop btn-block">Reset</button>
                    </div>

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
                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
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
                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
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
                            <div className="list-product-description product-description-brd margin-bottom-30">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/16.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-sm-8 product-description">
                                        <div className="overflow-h margin-bottom-5">
                                            <ul className="list-inline overflow-h">
                                                <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                                <li><span className="gender text-uppercase">Men</span></li>
                                                <li className="pull-right">
                                                    <ul className="list-inline product-ratings">
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="margin-bottom-10">
                                                <span className="title-price margin-right-10">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                            <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                            <ul className="list-inline add-to-wishlist margin-bottom-20">
                                                <li className="wishlist-in">
                                                    <i className="fa fa-heart"></i>
                                                    <a href="#">Add to Wishlist</a>
                                                </li>
                                                <li className="compare-in">
                                                    <i className="fa fa-exchange"></i>
                                                    <a href="#">Add to Compare</a>
                                                </li>
                                            </ul>
                                            <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-product-description product-description-brd margin-bottom-30">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/17.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-sm-8 product-description">
                                        <div className="overflow-h margin-bottom-5">
                                            <ul className="list-inline overflow-h">
                                                <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                                <li><span className="gender text-uppercase">Men</span></li>
                                                <li className="pull-right">
                                                    <ul className="list-inline product-ratings">
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="margin-bottom-10">
                                                <span className="title-price margin-right-10">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                            <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                            <ul className="list-inline add-to-wishlist margin-bottom-20">
                                                <li className="wishlist-in">
                                                    <i className="fa fa-heart"></i>
                                                    <a href="#">Add to Wishlist</a>
                                                </li>
                                                <li className="compare-in">
                                                    <i className="fa fa-exchange"></i>
                                                    <a href="#">Add to Compare</a>
                                                </li>
                                            </ul>
                                            <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-product-description product-description-brd margin-bottom-30">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/21.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-sm-8 product-description">
                                        <div className="overflow-h margin-bottom-5">
                                            <ul className="list-inline overflow-h">
                                                <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                                <li><span className="gender text-uppercase">Men</span></li>
                                                <li className="pull-right">
                                                    <ul className="list-inline product-ratings">
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="margin-bottom-10">
                                                <span className="title-price margin-right-10">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                            <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                            <ul className="list-inline add-to-wishlist margin-bottom-20">
                                                <li className="wishlist-in">
                                                    <i className="fa fa-heart"></i>
                                                    <a href="#">Add to Wishlist</a>
                                                </li>
                                                <li className="compare-in">
                                                    <i className="fa fa-exchange"></i>
                                                    <a href="#">Add to Compare</a>
                                                </li>
                                            </ul>
                                            <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-product-description product-description-brd margin-bottom-30">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/22.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-sm-8 product-description">
                                        <div className="overflow-h margin-bottom-5">
                                            <ul className="list-inline overflow-h">
                                                <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                                <li><span className="gender text-uppercase">Men</span></li>
                                                <li className="pull-right">
                                                    <ul className="list-inline product-ratings">
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="margin-bottom-10">
                                                <span className="title-price margin-right-10">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                            <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                            <ul className="list-inline add-to-wishlist margin-bottom-20">
                                                <li className="wishlist-in">
                                                    <i className="fa fa-heart"></i>
                                                    <a href="#">Add to Wishlist</a>
                                                </li>
                                                <li className="compare-in">
                                                    <i className="fa fa-exchange"></i>
                                                    <a href="#">Add to Compare</a>
                                                </li>
                                            </ul>
                                            <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="list-product-description product-description-brd">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <a href="shop-ui-inner.html"><img className="img-responsive sm-margin-bottom-20" src="assets/img/blog/23.jpg" alt=""/></a>
                                    </div>
                                    <div className="col-sm-8 product-description">
                                        <div className="overflow-h margin-bottom-5">
                                            <ul className="list-inline overflow-h">
                                                <li><h4 className="title-price"><a href="shop-ui-inner.html">Double-breasted</a></h4></li>
                                                <li><span className="gender text-uppercase">Men</span></li>
                                                <li className="pull-right">
                                                    <ul className="list-inline product-ratings">
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating-selected fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                        <li><i className="rating fa fa-star"></i></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="margin-bottom-10">
                                                <span className="title-price margin-right-10">$60.00</span>
                                                <span className="title-price line-through">$95.00</span>
                                            </div>
                                            <p className="margin-bottom-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin erat nec ornarevolu tpat. Etiam ut felis nec nisl eleifend lobortis. Aenean nibh est, hendrerit non conva.</p>
                                            <ul className="list-inline add-to-wishlist margin-bottom-20">
                                                <li className="wishlist-in">
                                                    <i className="fa fa-heart"></i>
                                                    <a href="#">Add to Wishlist</a>
                                                </li>
                                                <li className="compare-in">
                                                    <i className="fa fa-exchange"></i>
                                                    <a href="#">Add to Compare</a>
                                                </li>
                                            </ul>
                                            <button type="button" className="btn-u btn-u-sea-shop">Add to Cart</button>
                                        </div>
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