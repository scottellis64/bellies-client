import {
    fromJS,
    Map,
    List
} from "immutable";

import {
    SET_PRODUCTS,
    GET_PRODUCTS,
    GET_FILTERS,
    SET_FILTERS,
    SELECT_FILTER
} from "../constants/ActionTypes";

import productData from "../data/productData";
import FilterManager from "./FilterManager";

class ProductsManager {
    data = productData;

    initialState = Map();
    filterManager = null;

    productsKey = ["products"];
    pbfKey = ["pbf"];

    constructor(options) {
        this.filterManager = new FilterManager();
    }

    //
    // Maps the filterID to the number of products there are in that match that filter
    //
    updateProductsByFilterMap(state) {
        let pbfMap = state.getIn(this.pbfKey);
        let anyFiltersApplied = false;
        if (! pbfMap) {
            pbfMap = Map();
            state = state.setIn(this.pbfKey, pbfMap);
        } else {
            // Reset the filter counts
            pbfMap = pbfMap.map(filter => {
                let filterSelected = filter.get("selected");

                if (! anyFiltersApplied && filterSelected) {
                    anyFiltersApplied = true;
                }

                return fromJS({
                    count : 0,
                    selected : filterSelected
                });
            });
        }

        let productsList = anyFiltersApplied ? state.getIn(this.productsKey) : this.data.get("productsByID");
        productsList.forEach(product => {
            let filters = product.get("filters");
            if (filters) {
                filters.forEach(filter => {
                    if (! pbfMap.has(filter)) {
                        pbfMap = pbfMap.set(filter, fromJS({count : 1, selected : false}));
                    } else {
                        let filterState = pbfMap.get(filter);
                        pbfMap = pbfMap.set(filter, fromJS({count : filterState.get("count") + 1, selected : filterState.get("selected")}));
                    }
                });
            }
        });

        return state.setIn(this.pbfKey, pbfMap);
    }

    setProducts(state, products) {
        console.log("setProducts called");
        return this.updateProductsByFilterMap(state.set("products", products));
    }

    static isFilterSelected(state, filterID) {
        return state.getIn(["pbf", filterID, "selected"]);
    }

    filterProductsBySelectedFilters(state) {
        const allProducts = this.data.get("productsByID");
        const selectedFilters = ProductsManager.getSelectedFilters(state);
        const selectedFiltersCount = selectedFilters.count();

        if (selectedFiltersCount == 0) {
            return this.setProducts(state, allProducts);
        }

        return this.setProducts(state, allProducts.filter(product => {
            const productFilters = product.get("filters").filter(filter => selectedFilters.has(filter));
            return productFilters.count() == selectedFiltersCount;
        }));
    }

    static selectFilter(state, filterID, selected) {
        return state.setIn(["pbf", filterID, "selected"], selected);
    }

    static getSelectedFilters(state) {
        return state.get("pbf").filter(filter => filter.get("selected")).map((filter, key) => { return key; });
    }

    onDispatch(state = this.initialState, action = {type : "NONE"}) {
        switch (action.type) {
            case GET_PRODUCTS :
                console.log("getProducts called");
                return this.setProducts(state, this.data.get("productsByID"));

            case SET_PRODUCTS :
                return this.setProducts(state, fromJS(action.products));

            case GET_FILTERS :
                return this.filterManager.getAllFilters(state);

            case SET_FILTERS :
                return this.filterManager.setFilters(state, action.filters);

            case SELECT_FILTER :
                return this.filterProductsBySelectedFilters(
                    ProductsManager.selectFilter(state, action.id, action.selected));
        }

        return state;
    }
}

const productsManager = new ProductsManager();
export default function (state, action) {
    return productsManager.onDispatch(state, action);
}
