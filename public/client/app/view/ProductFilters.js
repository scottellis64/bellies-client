import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as CategoryActions from "../actions/CategoryActions";
import * as FilterActions from "../actions/FilterActions";

class FilterItem extends Component {
    static propTypes = {
        label : PropTypes.string,
        id : PropTypes.string,
        onSelected : PropTypes.func
    };

    render() {
        return (
            <li>
                <label className="checkbox">
                    <input type="checkbox" name="checkbox"
                           onClick={() => this.props.onSelected(this.props.id)}/>
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

function createFilterItemNodes(filters, mapKey, onSelected, products) {
    return filters.map(filter => {
        const filterID = filter.get("id");
        const count = products.getIn([mapKey, filterID]);
        return (
            <FilterItem key={filterID} id={filterID} label={filter.get("name")} onSelected={onSelected} count={count}/>
        );
    });
}

function createFilterGroupNodes(groups, onSelected, products) {
    return groups.map((group, key) => {
        return (
            <FilterGroup key={key} label={group.get("name")} products={products}
                filterItemNodes={createFilterItemNodes(group.get("items"), "pbf", onSelected, products)}/>
        );
    });
}

const mapProductFiltersStateToProps = (state) => ({
    categories : state.categories.get("categories"),
    categoryImageFolder : state.categories.get("imageFolder"),
    filters : state.filters.get("filters"),
    products : state.products
});

const mapDispatchToProps = (dispatch) => ({
    categoryActions : bindActionCreators(CategoryActions, dispatch),
    filterActions : bindActionCreators(FilterActions, dispatch)
});

class ProductFilters extends Component {
    static propTypes = {
        categoryImageFolder : PropTypes.string,
        categories : PropTypes.object,
        filters : PropTypes.object,
        products : PropTypes.object
    };

    render() {
        return (
            <div className="col-md-3 filter-by-block md-margin-bottom-60">
                <h1>Filter By</h1>
                <FilterGroup key="filterTypeCategory" label="Categories"
                             filterItemNodes={createFilterItemNodes(this.props.categories, "pbc", this.props.categoryActions.selectCategory, this.props.products)}/>
                {createFilterGroupNodes(this.props.filters, this.props.filterActions.selectFilter, this.props.products)}
            </div>
        )
    }
}


export default connect(mapProductFiltersStateToProps, mapDispatchToProps)(ProductFilters);
