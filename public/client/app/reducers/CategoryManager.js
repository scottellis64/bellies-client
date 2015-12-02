import {
    fromJS,
    Map
} from "immutable";

import categoryData from "../data/categoryData";

export default class CategoryManager {
    data = categoryData;

    getCategories(state) {
        return state.set("categories", fromJS({
            imageFolder : this.data.get("rootImageFolder"),
            categories : this.data.get("categoriesByID").map((obj, id) => {
                return fromJS({
                    id,
                    parentID : "none",
                    name : obj.get("name"),
                    shortDesc : obj.get("shortDesc"),
                    description : obj.get("description")
                });
            })
        }));
    }

    getCategoryByID(state) {
        return state.set("category", this.data.getIn(["categoriesByID", action.id]))
    }

    static setCategories(state, categories) {
        return state.mergeDeep(categories);
    }

    static selectCategory(state) {
        console.log(state.hasIn(["categories", "selectedCategories"]));
        return state;
    }

}
