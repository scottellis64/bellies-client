import {
    fromJS,
    Map,
    List
} from "immutable";

import {
    SET_PRODUCTS,
    GET_PRODUCTS,
    NEXT_PAGE,
    PREV_PAGE,
    SET_PAGE,
    GET_FILTERS,
    SET_FILTERS,
    SELECT_FILTER
} from "../constants/ActionTypes";

import productData from "../data/productData";
import FilterManager from "./FilterManager";

const initialPagingData = fromJS({
    numPages : 1,
    pageNum : 0,
    itemsPerPage : 9,
    itemsPerRow : 3,
    startIndex : 0,
    endIndex : 0
});

class ProductsManager {
    data = productData;

    initialState = Map();
    filterManager = null;

    productsKey = ["products"];
    pbfKey = ["pbf"];
    pagingKey = ["paging"];

    constructor(options) {
        this.filterManager = new FilterManager();
    }

    getProductsList(state) {
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

        return {state, list : anyFiltersApplied ? state.getIn(this.productsKey) : this.data.get("productsByID")};
    }

    updatePagingData(state, reset) {
        if (reset) {
            return state.setIn(this.pagingKey, initialPagingData);
        }

        let pagingData = state.get("paging");
        if (! pagingData) {
            pagingData = initialPagingData;
            state = state.set("paging", pagingData);
        }

        const ret = this.getProductsList(state);
        state = ret.state;
        const productsList = ret.list;

        // total of all products
        const count = productsList.count();

        const itemsPerRow = pagingData.get("itemsPerRow");

        //
        // Number of items per page
        //
        const itemsPerPage = pagingData.get("itemsPerPage");

        //
        // The current page number
        //
        const pageNum = pagingData.get("pageNum");

        let next = itemsPerPage * pageNum;
        let last = next + itemsPerPage - 1;

        const startIndex = Math.min(next, count-1);
        const endIndex = Math.min(last, count-1);
        const numPageItems = endIndex - startIndex + 1;

        let numRows = Math.floor(numPageItems / itemsPerRow);
        if (numPageItems % itemsPerRow) {
            numRows++;
        }

        return state.mergeIn(this.pagingKey, fromJS({
            numPages : Math.floor((count / itemsPerPage) + 1),
            numRows,
            pageNum,
            startIndex,
            endIndex,
            numPageItems
        }));
    }

    static getPageNum(state) {
        return state.getIn(["paging", "pageNum"]);
    }

    nextPage(state) {
        const pageNum = ProductsManager.getPageNum(state);
        return this.updatePagingData(state.mergeIn(this.pagingKey, {pageNum : pageNum + 1}));
    }

    prevPage(state) {
        const pageNum = ProductsManager.getPageNum(state);
        return this.updatePagingData(state.mergeIn(this.pagingKey, {pageNum : pageNum - 1}));
    }

    setPage(state, pageNum) {
        return this.updatePagingData(state.mergeIn(this.pagingKey, {pageNum : pageNum}));
    }

    clearFilterCounts(state) {
        let pbfMap = state.getIn(this.pbfKey);
        pbfMap.forEach((filter, name) => {
            state = state.setIn(["pbf", name], filter.set("count", 0));
        });

        return state;
    }

    //
    // Maps the filterID to the number of products there are in that match that filter
    //
    updateProductsByFilterMap(state) {
        const ret = this.getProductsList(state);
        state = this.clearFilterCounts(ret.state);
        const productsList = ret.list;

        let pbfMap = state.getIn(this.pbfKey);

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

        return this.updatePagingData(state.setIn(this.pbfKey, pbfMap));
    }

    setProducts(state, products) {
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
                return this.setProducts(state, this.data.get("productsByID"));

            case SET_PRODUCTS :
                return this.setProducts(state, fromJS(action.products));

            case NEXT_PAGE :
                return this.nextPage(state);

            case PREV_PAGE :
                return this.prevPage(state);

            case SET_PAGE :
                return this.setPage(state, action.page);

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
