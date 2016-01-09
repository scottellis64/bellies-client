import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";

class WizardTab extends Component {
    render() {
        let tabClass = this.props.isSelected ? "current" : "";
        if (this.props.isFirst) {
            tabClass += " first";
        }

        if (this.props.isLast) {
            tabClass += " last";
        }

        let iconClass = "rounded-x fa " + this.props.iconClass;
        let key = this.props.id;
        let linkKey = key + "_link";
        let path = "/" + key;

        return (
            <li role="tab" className={tabClass} aria-disabled="false" aria-selected="true">
                <Link key={linkKey} to={path}>
                    <span className="current-info audible">current step: </span><span className="number">{this.props.index}.</span>
                    <div className="overflow-h">
                        <h2>{this.props.label}</h2>
                        <p>{this.props.description}</p>
                        <i className={iconClass}></i>
                    </div>
                </Link>
            </li>
        );
    }
}

const mapStateToProps = (state) => ({
    tabs : state.checkouttabs.get("tabs")
});

const mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default class CheckoutWizardTabs extends Component {
    static propTypes = {
        tabs : PropTypes.object
    };

    render() {
        let size = this.props.tabs.size;
        var tabNodes = this.props.tabs.map((tab, index) => {
            let key = tab.get("key");
            return (
                <WizardTab key={key} id={key} label={tab.get("label")} index={index+1}
                           description={tab.get("description")} isLast={index == size-1}
                           isFirst={index == 0} isSelected={key == this.props.selected}
                           iconClass={tab.get("className")} />
            );
        });

        return (
            <div className="wizard clearfix" key="checkOutWizardTabs">
                <div className="steps clearfix">
                    <ul className="nav nav-tabs" role="tablist">
                        {tabNodes}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutWizardTabs);
