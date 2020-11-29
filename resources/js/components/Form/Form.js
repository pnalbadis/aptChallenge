import React, { useState } from 'react';
import Error from '../Error/Error';
import validateField from '../Validation/functions'
import RenderFields from './RenderFields';

const data = require('../form_schema.json');

const Form = () => {
    
    const initialValues = {
        name: '',
        nickname: '',
        address:'',
        age:''
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    
    const handleSubmit = (e) => {
        let errors = validate(formValues);
        if(Object.keys(errors).length > 0){
            e.preventDefault();
        }
        setFormErrors( errors );
    }

    const handleReset = (e) => {
        setFormValues(initialValues);
    }
    
    const validate = (values) => {
        let errors = {};

        for(var key of Object.keys(data.schema.props)){
            var errorMsg =  validateField(values, data.schema.props[key], key);
            if(errorMsg.length !== 0) {
                errors[key] = errorMsg;
            }
        }
        
        return errors;
    };
    
    return(
        <form method={data.meta.method} action={data.meta.action} onSubmit={handleSubmit} onReset={handleReset} >
            <input type="hidden" name="_token" value={csrf_token}/>
                <h2>{data.meta.alias}</h2>
                <Error formErrors={formErrors}/>
                <RenderFields data={data} handleChange={handleChange}/>
        </form>
    );
}

export default Form;