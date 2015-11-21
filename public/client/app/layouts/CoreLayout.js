import React, {Component} from "react";

import "bootstrap/css/bootstrap.css!";
import "/bellies/resources/css/shop/shop.style.css!";
import "/bellies/resources/css/font-awesome/css/font-awesome.min.css!";
import "/bellies/resources/css/headers/header-v5.css!";
import "/bellies/resources/css/footers/footer-v4.css!";
import "/bellies/resources/css/custom.css!";

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
