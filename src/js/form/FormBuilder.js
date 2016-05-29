import React, {Component, Children} from "react";
import Validations from "./Validations";

//
// FormBuilder builds a form and all its elements based on a set of definitions passed into it.  The property "fieldDefs" holds these
// definitions:
//
// templates - an object of reactjs template by name--its the surrounding code into which the field being built here will be injected.
// fields    - an array of field definitions
//             each definition looks like this:
//      key         - the unique key
//      name        - the name of the field
//      type        - the type of the field
//      template    - the template name to take from the templates object from above
//      placeholder - the label of the field
//      fieldClass  - css class or classes to apply to the field
//

export default class FormBuilder extends Component {
    validations = null;

    // We prevent the form from doing its native
    // behaviour, update the model and log out the value
    submit(event) {
        event.preventDefault();

        if (this.validations) {
            const formErrors = this.validations.validate(this.props.entity);
            if (formErrors) {
                //
                // todo: check for the existence of setFormValidationErrors
                // setFormValidationErrors must exist in the set of actions provided by the owner.  For example,
                // AccountActions contains this method.  This is going to be a problem on the create account page, which
                // will need its own distinct action for account creation errors.  This will have to be changed to be dynamic
                //
                this.props.actions.setFormValidationErrors(formErrors);
                return;
            }
        }

        //
        // If we get this far, then there are either no validations or all validations have passed.
        // Submit the form and move on.
        //
        this.props.submitAction();
    }

    addValidation(formDef) {
        if (! this.validations) {
            this.validations = new Validations();
        }
        this.validations.addValidation(formDef, this.props.entity);
    }

    makeValueLink(field) {
        let entity = this.props.entity;
        let actions = this.props.actions;

        return {
            value : this.props.entity[field],

            requestChange : function(entityValue) {
                entity[field] = entityValue;
                actions.setField(entity);
            }
        }
    }

    getFormErrors() {
        return this.props.entity.formErrors;
    }

    getFormFieldError(id) {
        const formErrors = this.getFormErrors();
        if (! formErrors) {
            return null;
        }

        for (var i=0; i < formErrors.length; i++) {
            var formError = formErrors[i];
            if (formError.id == id) {
                return formError;
            }
        }

        return null;
    }

    buildInput(templateGetter, formDef) {
        if (formDef.format) {
            this.addValidation(formDef);
        }

        const fieldError = this.getFormFieldError(formDef.name);
        let groupClasses = "input-group";
        if (fieldError) {
            groupClasses += " state-error";
        }

        const inputProps = {
            props : {
                valueLink: this.makeValueLink(formDef.name),
                name : formDef.name,
                //type : formDef.type,
                placeholder : formDef.placeholder,
                className : formDef.className
            },
            key : formDef.key,
            groupClasses : groupClasses,
            fieldClass : formDef.fieldClass
        };

        if (fieldError) {
            inputProps.errorElem = (
                <em htmlFor={fieldError.id} className="invalid">{fieldError.error}</em>
            )
        }

        return templateGetter(inputProps);
    }

    buildFields() {
        //
        // Internal props contain the entity and entityActions needed to enable the curried FormElement
        // LoginField satisfied the first parameter; now this LoginFieldType satisfies the next two.
        // buildLoginFields will satisfy the last (field) and return an actual type that can be rendered to the page.
        //


        //
        // formDef
        //  fields : a list of fields that have these properties:
        //      fieldClass : the class name to add to the form element node
        //      name : the name of the form element
        //      placeholder : the form label
        //      type : the validatation type (todo; needs explanation)
        //      template : the template to format the field with (from the templates section explained next
        //
        //  templates : templates for each form element references in the array of fields
        //

        this.validations = null;

        const templates = this.props.fieldDefs.templates;
        return this.props.fieldDefs.fields.map(formDef => {
            switch(formDef.template) {
                case "input" :
                    return this.buildInput(templates[formDef.template], formDef);

                return null;
            }
        });
    }

    render() {
        return (
            <form onSubmit={(e) => this.submit(e)} id={this.props.id} className={this.props.className}>
                {this.buildFields()}

                <button className="btn-u btn-u-sea-shop btn-block margin-bottom-20" type="submit">Log in</button>
            </form>
        );
    }
}