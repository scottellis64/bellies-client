import React, {Component, PropTypes} from "react";

import {List} from "immutable";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as FilterActions from "../actions/FilterActions";

class FilterItem extends Component {
    static propTypes = {
        label : PropTypes.string,
        id : PropTypes.string,
        parentID : PropTypes.string,
        onSelected : PropTypes.func
    };

    render() {
        return (
            <li>
                <label className="checkbox">
                    <input type="checkbox" name="checkbox"
                           onClick={() => this.props.onSelected(this.props.parentID, this.props.id, ! this.props.selected)}
                           checked={this.props.selected}/>
                    <i></i>
                    {this.props.label}
                    <small>{this.props.count}</small>
                </label>
            </li>
        )
    }
}

class FilterGroup extends Component {
    static propTypes = {
        label : PropTypes.string,
        filterItemNodes : PropTypes.object
    };

    render() {
        return (
            <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                                {this.props.label}
                                <i className="fa fa-angle-down"></i>
                            </a>
                        </h2>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <ul className="list-unstyled checkbox-list">
                                {this.props.filterItemNodes}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function createFilterItemNodes(filters, onSelected, products) {
    return filters.map(filter => {
        const filterID = filter.get("id");
        const parentID = filter.get("parentID");
        const count = products.getIn(["pbf", filterID, "count"]);
        const selected = products.getIn(["pbf", filterID, "selected"]);

        return (
            <FilterItem key={filterID} id={filterID} parentID={parentID} label={filter.get("name")} onSelected={onSelected} count={count} selected={selected}/>
        );
    });
}

function createFilterGroupNodes(products, onSelected) {
    return products.get("filters").map((group, key) => {
        return (
            <FilterGroup key={key} label={group.get("name")} products={products}
                filterItemNodes={createFilterItemNodes(group.get("items"), onSelected, products)}/>
        );
    });
}

const mapProductFiltersStateToProps = (state) => ({
    products : state.products
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    filterActions : bindActionCreators(FilterActions, dispatch)
});

class ProductFilters extends Component {
    static propTypes = {
        products : PropTypes.object
    };

    render() {
        return (
            <div className="col-md-3 filter-by-block md-margin-bottom-60">
                <h1>Filter By</h1>
                {createFilterGroupNodes(this.props.products, this.props.filterActions.selectFilter)}
            </div>
        )
    }
}


export default connect(mapProductFiltersStateToProps, mapDispatchToProps)(ProductFilters);
