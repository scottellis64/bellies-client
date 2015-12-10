import React, {Component} from "react";

export default class ProductRating extends Component {
    render() {
        return (
            <ul className="list-inline product-ratings">
                <li><i className="rating-selected fa fa-star"></i></li>
                <li><i className="rating-selected fa fa-star"></i></li>
                <li><i className="rating-selected fa fa-star"></i></li>
                <li><i className="rating fa fa-star"></i></li>
                <li><i className="rating fa fa-star"></i></li>
                {/*
                <li className="like-icon"><a data-original-title="Add to wishlist"
                                             data-toggle="tooltip" data-placement="left"
                                             className="tooltips" href="#"><i
                    className="fa fa-heart"></i></a></li>
                */}
            </ul>
        );
    }
}