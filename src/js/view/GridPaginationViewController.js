import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fromJS} from "immutable";

import * as ProductActions from "../actions/ProductActions";

const mapDispatchToProps = (dispatch) => ({
    productActions : bindActionCreators(ProductActions, dispatch)
});

const mapStateToProps = (state) => ({
    paging : state.products.get("paging")
});

class GridPaginationViewController extends Component {
    render() {
        let paginationNodes = [];
        var paging = this.props.paging.toJS();

        paginationNodes.push(<li key="pn_prev"><a onClick={() => this.props.productActions.prevPage()}><i className="fa fa-angle-left"></i></a></li>);

        for (var pageNum=0; pageNum < paging.numPages; pageNum++) {
            const displayPage = pageNum + 1;
            const itemClass = pageNum == paging.pageNum ? "active" : "";
            const key = "pn_" + pageNum;
            paginationNodes.push(
                <li key={key} className={itemClass}><a onClick={() => this.props.productActions.setPage(displayPage)}>{displayPage}</a></li>
            );
        }

        paginationNodes.push(<li key="pn_next"><a onClick={() => this.props.productActions.nextPage()}><i className="fa fa-angle-right"></i></a></li>);

        return (
            <div className="text-center">
                <ul className="pagination pagination-v2">
                    {paginationNodes}
                </ul>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridPaginationViewController);
