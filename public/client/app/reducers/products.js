import {
    fromJS,
    Map,
    List
} from "immutable";

import {
    SET_PRODUCTS,
    GET_PRODUCTS,
    GET_PRODUCTS_BY_CATEGORY,
    GET_FILTERS,
    SET_FILTERS,
    SELECT_FILTER,
    GET_CATEGORIES,
    SET_CATEGORIES,
    SELECT_CATEGORY
} from "../constants/ActionTypes";

import productData from "../data/productData";
import FilterManager from "./FilterManager";
import CategoryManager from "./CategoryManager";

class ProductsManager {
    data = productData;

    initialState = Map();
    filterManager = null;
    categoryManager = null;

    productsKey = ["products"];
    pbfKey = ["pbf"];
    pbcKey = ["pbc"];

    constructor(options) {
        this.filterManager = new FilterManager();
        this.categoryManager = new CategoryManager();
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
        return this.updateProductsByCategoryMap(
            this.updateProductsByFilterMap(state.set("products", products)));
    }

    static isFilterSelected(state, filterID) {
        return state.getIn(["pbf", filterID, "selected"]);
    }

    filterProductsBySelectedFilters(state) {
        //this.setProducts(this.data.get("productsByID").filter(product =>
        //    product.get("filters").some(filterID => pbf.some(filter => filter.selected))
        //));

        const prd = this.data.get("productsByID").filter(product => {
            let hasFilter = false;
            product.get("filters").some(filterID => {
                if (ProductsManager.isFilterSelected(state, filterID)) {
                    hasFilter = true;
                    return true;
                }
            });

            return hasFilter;
        });

        return this.setProducts(state, prd);
    }

    //
    // Maps category to the number of items per category there are
    //
    updateProductsByCategoryMap(state) {
        let pbcMap = Map();
        state = state.setIn(this.pbcKey, pbcMap);

        state.getIn(this.productsKey).forEach(product => {
            let categories = product.get("categories");
            if (categories) {
                categories.forEach(category => {
                    if (! pbcMap.has(category)) {
                        pbcMap = pbcMap.set(category, fromJS({
                            count : 1,
                            selected : false
                        }));
                    } else {
                        let categoryState = pbcMap.get(category);
                        pbcMap = pbcMap.set(category, fromJS({
                            count : categoryState.get("count") + 1,
                            selected : categoryState.get("selected")
                        }));
                    }
                });
            }
        });

        return state.setIn(this.pbcKey, pbcMap);
    }

    static selectFilter(state, filterID, selected) {
        return state.setIn(["pbf", filterID, "selected"], selected);
    }

    onDispatch(state = this.initialState, action = {type : "NONE"}) {
        switch (action.type) {
            case GET_PRODUCTS :
                return this.setProducts(state, this.data.get("productsByID"));

            case SET_PRODUCTS :
                return this.setProducts(state, fromJS(action.products));

            case GET_PRODUCTS_BY_CATEGORY :
                return this.setProducts(this.data.get("productsByID").filter((product) => {
                    return product.get("categories").includes(action.categoryID)
                }));

            case GET_FILTERS :
                return this.filterManager.getAllFilters(state);

            case SET_FILTERS :
                return this.filterManager.setFilters(state, action.filters);

            case SELECT_FILTER :
                return this.filterProductsBySelectedFilters(
                    ProductsManager.selectFilter(state, action.id, action.selected));

            case GET_CATEGORIES :
                return this.categoryManager.getCategories(state);

            case SET_CATEGORIES :
                return CategoryManager.setCategories(state, action.categories);

            case SELECT_CATEGORY :
                return CategoryManager.selectCategory(state);
        }

        return state;
    }
}

const productsManager = new ProductsManager();
export default function (state, action) {
    return productsManager.onDispatch(state, action);
}
