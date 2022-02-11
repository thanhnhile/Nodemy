

function Validator(options) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }
    //Chua tat ca cac rule cua input element
    var selectorRules = {};

    function validate(inputElement, rule) {
        let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMess = undefined;
        var rules = selectorRules[rule.selector];

        //Kiem tra lan luot tung rule khi co loi thi ngung
        for (let i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMess = rules[i](formElement.querySelector(rule.selector + ":checked"));
                    break;
                default: errorMess = rules[i](inputElement.value);
            }

            if (errorMess) {
                break;
            }
        }


        if (errorMess) {
            errorElement.innerHTML = errorMess;
            getParent(inputElement, options.formGroupSelector).classList.add("invalid");
        } else {
            errorElement.innerHTML = "";
            getParent(inputElement, options.formGroupSelector).classList.remove("invalid");
        }
        return errorMess;
    }
    //Lay element form can xu ly
    var formElement = document.querySelector(options.form);
    if (formElement) {
        //Xu li khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector);
                var isError = validate(inputElement, rule);
                if (isError) {
                    isFormValid = false;
                }
            })
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce((values, input) => {
                        switch (input.type) {
                            case 'radio':
                                if (input.matches(':checked')) {
                                    values[input.name] = input.value;
                                }
                                break;
                            case 'checkbox':
                                if (input.matches(':checked')) {
                                    if(Array.isArray(values[input.name])){
                                        
                                        values[input.name].push(input.value);
                                    }
                                }
                                else{
                                    values[input.name]=[];
                                } break;
                            case 'file': values[input.name] = input.files;break;
                            default: values[input.name] = input.value;
                        }
                        return values;
                    }, {});
                    options.onSubmit(formValues);
                }
            }

        }
        //Lap qua cac form va xu li
        options.rules.forEach((rule) => {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }
            //Lang nghe event cac input element
            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(inputElement => {
                //Xu li truong hop blur
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };
                //Xu li khi input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerHTML = "";
                    getParent(inputElement, options.formGroupSelector).classList.remove("invalid");
                };
            })


        });
    }
}
Validator.isRequired = function (selector, mess) {
    return {
        selector: selector,
        //Nhan value cua input
        test: function (inputVal) {
            if (typeof inputVal === 'string') {
                return inputVal.trim() ? undefined : mess || "Vui lòng nhập trường này";
            }
            return inputVal ? undefined : mess || "Vui lòng nhập trường này";
        }
    };
};
Validator.isEmail = function (selector, mess) {
    return {
        selector: selector,
        test: function (inputVal) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(inputVal) ? undefined : mess || "Trường này phải là Email";
        }
    };
};
Validator.minLength = function (selector, min, mess) {
    return {
        selector: selector,
        test: function (inputVal) {
            return inputVal.length >= min ? undefined : mess || "Mật khẩu phải dài hơn " + min + " kí tự";
        }
    }
}
Validator.isConfirmed = function (selector, getConfirmValue, mess) {
    return {
        selector: selector,
        test: function (inputVal) {
            return inputVal.trim() == getConfirmValue() ? undefined : mess || "Giá trị nhập vào không chính xác";
        }
    }
}