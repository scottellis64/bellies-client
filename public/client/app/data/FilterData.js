import {fromJS, Map} from "immutable";

export default fromJS({
    rootImageFolder: "/bellies/resources/img/categories",

    filtersByID: {
        filterBracelets: {label: "Bracelets"},
        filterNecklaces: {label: "Necklaces"},
        filterEarrings: {label: "Earrings"},
        filterTassels: {label: "Tassels"},
        filterMaterialGold: {label: "Gold"},
        filterMaterialSilver: {label: "Silver"},
        filterMaterialGlass: {label: "Glass"},
        filterMaterialGS: {label: "Gem Stone"},
        filterMaterialRG: {label: "Rose Gold"},
        filterMaterialAG: {label: "Antique Gold"},
        filterMaterialAS: {label: "Antique Silver"},
        filterMaterialBrass: {label: "Brass"},
        filterMaterialLC: {label: "Leather Chording"},
        filterPriceRange1: {label: "$5 to $9.99"},
        filterPriceRange2: {label: "$10 to $19.99"},
        filterPriceRange3: {label: "$20 to $29.99"},
        filterPriceRange4: {label: "$30 >"},
        filterStyleKnotted: {label: "Knotted"},
        filterStyleVintage: {label: "Vintage"},
        filterStyleMacrame: {label: "Macrame"}
    },

    filterTypes: {
        filterTypeCategory: {
            label: "Categories",
            items: ["filterBracelets", "filterNecklaces", "filterEarrings", "filterTassels"]
        },
        filterTypeMaterial: {
            label: "Material",
            items: ["filterMaterialGold", "filterMaterialSilver", "filterMaterialGlass", "filterMaterialGS", "filterMaterialRG",
                "filterMaterialAG", "filterMaterialAS", "filterMaterialBrass", "filterMaterialLC"]
        },
        filterTypePrice: {
            label: "Price",
            items: ["filterPriceRange1", "filterPriceRange2", "filterPriceRange3", "filterPriceRange4"]
        },
        filterTypeStyle: {
            label: "Style",
            items: ["filterStyleKnotted", "filterStyleVintage", "filterStyleMacrame"]
        }
    }
});

