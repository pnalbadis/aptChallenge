function validateField(values, element, key) {
    let error = '';
    
    if(element.hasOwnProperty('validation')) {
        for(var i=0; i< element.validation.length; i++){
            let rule = element.validation[i].value;
            
            if(element.validation[i].type == "regex") {
                let re = rule.substring(1,rule.length -2);
                const regex = new RegExp(re,rule[rule.length -1]);
                if (!regex.test(values[key])) {
                    error = element.validation[i].error_message;
                }
            }
            
            if(element.validation[i].type == "length") {
                if (values[key].length < rule.min ||
                    values[key].length > rule.max) {
                    error = element.validation[i].error_message;
                }
            }
        }
    }
    
    return error;
}

export default validateField;