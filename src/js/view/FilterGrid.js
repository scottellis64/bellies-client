import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fromJS} from "immutable";

import * as ProductActions from "../actions/ProductActions";
import * as FilterActions from "../actions/FilterActions";

import {
    BreadCrumbs,
    FilterGridViewController,
    GridPaginationViewController,
    ProductFilters,
    ProductRating
} from "./index";

class ProductView extends Component {
    render() {
        const imageSrc = "/bellies/resources/img/products/thumbnails/" + this.props.id + ".jpg";

        return (
            <div className="col-md-4">
                <div className="product-img product-img-brd">
                    <a href="#"><img className="full-width img-responsive" src={imageSrc} alt=""/></a>
                    {/*<a className="product-review" href="#">Quick review</a>*/}
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
                        <FilterGridViewController count={products.count()}/>

                        <GridView products={products} />

                        {/*<GridPaginationViewController products={products}/>*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterGrid);
