import React, {Component} from "react";

import "bootstrap/css/bootstrap.css!";
import "/css/shop/shop.style.css!";
import "/css/font-awesome.min.css!";
import "/css/headers/header-v5.css!";
import "/css/footers/footer-v4.css!";
import "/css/custom.css!";

export default class CoreLayout extends Component {
    static propTypes = {
        children: React.PropTypes.element
    };

    render() {
        return (
            <div className="page-container">
                <div className="view-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
