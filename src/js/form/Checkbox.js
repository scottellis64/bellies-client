import React, {Component} from "react";
import {FormElement} from "./index";

export default class Checkbox extends Component {
    render() {
        return (
            <input type="checkbox" name={this.props.name} checkedLink={this.makeValueLink(this.props.field)}/>
        );
    }
}