import React, {Component} from "react";
import $ from "jquery";

export default class MasterSlider extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <div className="master-slider ms-skin-default" id="masterslider">
                <div className="ms-slide">
                    <img className="ms-brd" src="/bellies/resources/img/blank.gif"
                         data-src="/bellies/resources/img/products/28.jpg" alt="lorem ipsum dolor sit" />
                    <img className="ms-thumb" src="/bellies/resources/img/products/28-thumb.jpg" alt="thumb" />
                </div>
                <div className="ms-slide">
                    <img src="/bellies/resources/img/blank.gif" data-src="/bellies/resources/img/products/29.jpg"
                         alt="lorem ipsum dolor sit" />
                    <img className="ms-thumb" src="/bellies/resources/img/products/29-thumb.jpg" alt="thumb" />
                </div>
                <div className="ms-slide">
                    <img src="/bellies/resources/img/blank.gif" data-src="/bellies/resources/img/products/30.jpg"
                         alt="lorem ipsum dolor sit" />
                    <img className="ms-thumb" src="/bellies/resources/img/products/30-thumb.jpg" alt="thumb" />
                </div>
            </div>
        );
    }
}