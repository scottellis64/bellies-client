import {REQUIRED, EMAIL, MONTH, DAY, YEAR, EQUALS_FIELD} from "../constants/ValidationTypes";

//
// Validate an email address
//
function email(emailAddress) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailAddress);
}

function validateField(field, fieldValue) {
    let fieldError = null;

    switch (field.type) {
        case REQUIRED:
            if (typeof fieldValue == "undefined" || fieldValue.length == 0) {
                fieldError = field.field + " is required";
            }
            break;

        case EMAIL :
            if (! email(fieldValue)) {
                fieldError = field.field + " is not a valid email address";
            }
            break;
    }

    return fieldError ? {
        error : fieldError,
        id : field.id
    } : false;
}

export default class Validations {
    validations = [];

    addValidation(formDef) {
        const fieldFormat = formDef.format;
        if (! fieldFormat) {
            return;
        }

        if (fieldFormat.required) {
            this.validations.push({
                id : formDef.name,
                field : formDef.placeholder,
                type : REQUIRED
            });
        }

        if (fieldFormat.validations) {
            for (var i=0; i < fieldFormat.validations.length; i++) {
                this.validations.push({
                    id : formDef.name,
                    field : formDef.placeholder,
                    type : fieldFormat.validations[i].type
                });
            }
        }
    }

    //
    // Validate all fields in the form.  If there are any problems return a collection objects that indicate the
    // field name and type.
    //
    validate(entity) {
        if (! this.validations) {
            return;
        }

        let formErrors = null;
        for (var i=0; i < this.validations.length; i++) {
            let field = this.validations[i];
            let fieldError = validateField(field, entity[field.id]);
            if (fieldError) {
                if (! formErrors) {
                    formErrors = [];
                }

                formErrors.push(fieldError);
            }
        }

        return formErrors;
    }
}