import React from "react";
import { BreadCrumbs, MasterSlider } from "./index";

export default class Product extends React.Component {
    render() {
        return (
            <div className="shop-product">
                <BreadCrumbs />

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 md-margin-bottom-50">
                            <div className="ms-showcase2-template">
                                <MasterSlider />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="shop-product-heading">
                                <h2>Corinna Foley</h2>
                                <ul className="list-inline shop-product-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>

                            <ul className="list-inline product-ratings margin-bottom-30">
                                <li><i className="rating-selected fa fa-star"></i></li>
                                <li><i className="rating-selected fa fa-star"></i></li>
                                <li><i className="rating-selected fa fa-star"></i></li>
                                <li><i className="rating fa fa-star"></i></li>
                                <li><i className="rating fa fa-star"></i></li>
                                <li className="product-review-list">
                                    <span>(1) <a href="#">Review</a> | <a href="#"> Add Review</a></span>
                                </li>
                            </ul>

                            <p>Integer <strong>dapibus ut elit</strong> non volutpat. Integer auctor purus a lectus
                                suscipit fermentum. Vivamus lobortis nec erat consectetur elementum.</p><br />

                            <ul className="list-inline shop-product-prices margin-bottom-30">
                                <li className="shop-red">$57.00</li>
                                <li className="line-through">$70.00</li>
                                <li>
                                    <small className="shop-bg-red time-day-left">4 days left</small>
                                </li>
                            </ul>

                            <h3 className="shop-product-title">Size</h3>
                            <ul className="list-inline product-size margin-bottom-30">
                                <li>
                                    <input type="radio" id="size-1" name="size"/>
                                    <label htmlFor="size-1">S</label>
                                </li>
                                <li>
                                    <input type="radio" id="size-2" name="size"/>
                                    <label htmlFor="size-2">M</label>
                                </li>
                                <li>
                                    <input type="radio" id="size-3" name="size"/>
                                    <label htmlFor="size-3">L</label>
                                </li>
                                <li>
                                    <input type="radio" id="size-4" name="size"/>
                                    <label htmlFor="size-4">XL</label>
                                </li>
                            </ul>

                            <h3 className="shop-product-title">Color</h3>
                            <ul className="list-inline product-color margin-bottom-30">
                                <li>
                                    <input type="radio" id="color-1" name="color"/>
                                    <label className="color-one" htmlFor="color-1"></label>
                                </li>
                                <li>
                                    <input type="radio" id="color-2" name="color"/>
                                    <label className="color-two" htmlFor="color-2"></label>
                                </li>
                                <li>
                                    <input type="radio" id="color-3" name="color"/>
                                    <label className="color-three" htmlFor="color-3"></label>
                                </li>
                            </ul>

                            <h3 className="shop-product-title">Quantity</h3>

                            <div className="margin-bottom-40">
                                <form name="f1" className="product-quantity sm-margin-bottom-20">
                                    <button type='button' className="quantity-button" name='subtract'
                                            onclick='javascript: subtractQty();' value='-'>-
                                    </button>
                                    <input type='text' className="quantity-field" name='qty' value="1" id='qty'/>
                                    <button type='button' className="quantity-button" name='add'
                                            onclick='javascript: document.getElementById("qty").value++;' value='+'>+
                                    </button>
                                </form>
                                <button type="button" className="btn-u btn-u-sea-shop btn-u-lg">Add to Cart</button>
                            </div>

                            <ul className="list-inline add-to-wishlist add-to-wishlist-brd">
                                <li className="wishlist-in">
                                    <i className="fa fa-heart"></i>
                                    <a href="#">Add to Wishlist</a>
                                </li>
                                <li className="compare-in">
                                    <i className="fa fa-exchange"></i>
                                    <a href="#">Add to Compare</a>
                                </li>
                            </ul>
                            <p className="wishlist-category"><strong>Categories:</strong> <a href="#">Clothing,</a> <a href="#">Shoes</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}