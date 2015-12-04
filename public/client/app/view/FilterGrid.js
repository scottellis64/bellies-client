import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fromJS} from "immutable";

import * as ProductActions from "../actions/ProductActions";
import * as FilterActions from "../actions/FilterActions";

import {
    BreadCrumbs,
    ProductFilters
} from "./index";

class FilterGridViewController extends Component {
    render() {
        return (
            <div className="row margin-bottom-5">
                <div className="col-sm-4 result-category">
                    <h2></h2>
                    <small className="shop-bg-red badge-results">{this.props.products.count()} Results</small>
                </div>
                {/*
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
                 */}
            </div>
        )
    }
}

class ProductRating extends Component {
    render() {
        return (
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
        )
    }
}

class GridPaginationViewController extends Component {
    render() {
        return (
            <div className="text-center">
                <ul className="pagination pagination-v2">
                    <li><a href="#"><i className="fa fa-angle-left"></i></a></li>
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                </ul>
            </div>
        )
    }
}

class ProductView extends Component {
    render() {
        const imageSrc = "/bellies/resources/img/products/thumbnails/" + this.props.id + ".jpg";

        return (
            <div className="col-md-4">
                <div className="product-img product-img-brd">
                    <a href="#"><img className="full-width img-responsive" src={imageSrc} alt=""/></a>
                    <a className="product-review" href="#">Quick review</a>
                    <a className="add-to-cart" href="#"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                    {/* <div className="shop-rgba-dark-green rgba-banner">New</div> */}
                </div>
                <div className="product-description product-description-brd margin-bottom-30">
                    <div className="overflow-h margin-bottom-5">
                        <div className="pull-left">
                            <h4 className="title-price"><a
                                href="#">{this.props.name}</a></h4>
                        </div>
                        <div className="product-price">
                            <span className="title-price">{this.props.price}</span>
                        </div>
                    </div>
                    {/*<ProductRating />*/}
                </div>
            </div>
        )
    }
}

class GridRow extends Component {
    render() {
        let rowStyle = "row illustration-v2";
        if (! this.props.last) {
            rowStyle += " margin-bottom-30";
        }

        const productNodes = this.props.products.map(product => {
            return (
                <ProductView id={product.get("id")} name={product.get("name")} price={product.get("price")} />
            );
        });

        return (
            <div className={rowStyle}>
                {productNodes}
            </div>
        )
    }
}

class GridView extends Component {
    render() {

        // total of all products
        const count = this.props.products.count();

        // Calculate the number of rows, which is the number of products divided by the number of products-per-row plus 1.
        const numRows = count <= 3 ? 1 : Math.floor(count / 3) + 1;

        // Calculate the number of products in the last row
        const lastRowCount = count % 3;

        let gridRows = [];
        let productIndex = 0, nextProductIndex = 0;
        for (var row = 0; row < numRows; row++) {
            const isLast = row == numRows - 1;
            nextProductIndex = productIndex + (isLast ? lastRowCount : 3);
            let gridRowKey = "gridRow_";
            let gridRowData = {
                last : isLast,
                products : this.props.products.slice(productIndex, nextProductIndex).map((product, id) => {
                    gridRowKey += "_" + id;
                    return fromJS({
                        id,
                        name : product.get("name"),
                        price : "$" + product.get("price")
                    })
                })
            };

            gridRowData.key = gridRowKey;

            gridRows.push(gridRowData);
            productIndex = nextProductIndex;
        }

        const gridRowNodes = gridRows.map(gridRow => {
            return (
                <GridRow key={gridRow.key} last={gridRow.last} products={gridRow.products} />
            )
        });

        return (
            <div className="filter-results">
                {gridRowNodes}
            </div>
        )
    }
}

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
        const products = this.props.products.get("products");

        return (
            <div className="content container">
                <div className="row">

                    <ProductFilters />

                    <div className="col-md-9">
                        <FilterGridViewController products={products}/>

                        <GridView products={products} />

                        {/*<GridPaginationViewController products={products}/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterGrid);
