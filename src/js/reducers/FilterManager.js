import {fromJS, Map, List} from "immutable";
import filterData from "../data/filterData";

export default class FilterManager {
    data = filterData;

    filtersKey = ["filters"];

    getFilterByID(id) {
        return this.data.getIn(["filtersByID", id]);
    }

    //
    // Gets the complete set of filters organized by type
    //
    getAllFilters(state) {
        return state.setIn(this.filtersKey, this.data.get("filterTypes").map((brand, brandID) => {
            let filterGroup = fromJS({
                name : brand.get("label"),
                items : {}
            });

            brand.get("items").forEach(filterID => {
                const filter = this.getFilterByID(filterID);

                filterGroup = filterGroup.setIn(["items", filterID], fromJS({
                    id : filterID,
                    name : filter.get("label"),
                    parentID : brandID
                }))
            });

            return filterGroup;
        }));
    }

    setFilters(state, filters) {
        return state.setIn(this.filtersKey, fromJS(filters));
    }

    //static getSelectedFilterItems(items) {
    //    return items.filter(filter => {
    //        return filter.get("selected");
    //    });
    //}
    //
    //static hasSelectedFilterItems(items) {
    //    return items.some(filter => filter.get("selected")).length > 0;
    //}
    //
    //static getBrandsWithSelectedFilters(state) {
    //    return state.getIn(["filters", "filters"]).filter(brand => FilterManager.hasSelectedFilterItems(brand.get("items")));
    //}

    static getSelectedFilterIDs(state) {
        const filterIDs = List();

        FilterManager.getBrandsWithSelectedFilters(state).forEach(brand => {
            FilterManager.getSelectedFilterItems(brand.get("items")).forEach(filter => filterIDs.push(filter.get("id")));
        });

        return filterIDs;
    }
}
