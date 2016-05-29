import React, {Component} from "react";
import {curry, dissoc} from "ramda";

function makeValueLink(field, entity, entityActions) {
    return {
        value : entity[field],

        requestChange : function(entityValue) {
            entity[field] = entityValue;

            //
            // This will emit a flux event that will result in a state update
            //
            entityActions.setField(entity);
        }
    }
}

export default curry((FormField, entity, entityActions, field) => class extends Component {
    render() {
        console.log(this.getTestValue());
        return <FormField {...this.props} valueLink={makeValueLink.bind(this, field, entity, entityActions)}/>;
    }

    getTestValue() {
        return "Hello";
    }

    componentDidMount() {
        console.log("Mounted");
    }
});