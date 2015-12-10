import React, {Component} from "react";

export default class GridPaginationViewController extends Component {
    render() {
        return (
            <div className="text-center">
                <ul className="pagination pagination-v2">
                    <li><i className="fa fa-angle-left"></i></li>
                    <li>1</li>
                    <li className="active">2</li>
                    <li>3</li>
                    <li><i className="fa fa-angle-right"></i></li>
                </ul>
            </div>
        );
    }
}