import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fromJS} from "immutable";

import * as ShoppingCartActions from "../actions/ShoppingCartActions";

import {
    BreadCrumbs,
    FilterGridViewController,
    GridPaginationViewController,
    ProductFilters,
    ProductRating
} from "./index";

class ProductRow extends Component {
    render() {
        const imageSrc = "/img/products/thumbnails/" + this.props.id + ".jpg";

        return (
            <div>
                <div className="list-product-description product-description-brd margin-bottom-30">
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="img-responsive sm-margin-bottom-20" src={imageSrc} alt=""/>
                        </div>
                        <div className="col-sm-8 product-description">
                            <div className="overflow-h margin-bottom-5">
                                <ul className="list-inline overflow-h">
                                    <li><h4 className="title-price">{this.props.name}</h4></li>

                                    <li className="pull-right">
                                        <ProductRating />
                                    </li>
                                </ul>

                                <div className="margin-bottom-10">
                                    <span className="title-price margin-right-10">{this.props.price}</span>
                                </div>

                                <p className="margin-bottom-20">{this.props.description}</p>

                                <button type="button" className="btn-u btn-u-sea-shop"
                                        onClick={() => this.props.addToCart(this.props.id, this.props.name, 1, this.props.price)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class FilterListComponents extends Component {
    render() {
        const count = this.props.products.count();
        let productNum = 0;

        // total of all products
        const numPageItems = this.props.paging.get("numPageItems");

        const startIndex = this.props.paging.get("startIndex");
        const endIndex = this.props.paging.get("endIndex");

        var row = 0;
        const listNodes = this.props.products.filter((product, id) => {
            row++;
            if (row >= startIndex && row <= endIndex) {
                return true;
            }
        }).map((product, id) => {
            const price = "$" + product.get("price");
            return(
                <ProductRow key={id} last={row == endIndex} id={id}
                            name={product.get("name")} price={price} description={product.get("description")}
                            addToCart={this.props.addToCart}/>
            );
        });

        return (
            <div className="filter-results">
                {listNodes}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    shoppingCartActions : bindActionCreators(ShoppingCartActions, dispatch)
});

const mapStateToProps = (state) => ({
    products : state.products,
    paging : state.products.get("paging")
});

class FilterList extends Component {
    render() {
        const products = this.props.products.get("products");

        return (
            <div className="content container">
                <div className="row">
                    <ProductFilters />

                    <div className="col-md-9">
                        <FilterGridViewController count={products.count()}/>
                        <FilterListComponents products={products} addToCart={this.props.shoppingCartActions.addItem} paging={this.props.paging}/>
                        <GridPaginationViewController />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
