import React, {Component} from "react";

import "bootstrap/css/bootstrap.css!";
import "/bellies/css/shop/shop.style.css!";
import "/bellies/css/font-awesome.min.css!";
import "/bellies/css/headers/header-v5.css!";
import "/bellies/css/footers/footer-v4.css!";
import "/bellies/css/custom.css!";

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
