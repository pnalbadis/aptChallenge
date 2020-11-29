import React from 'react';
import '../Form/Form.css';

const Button =  (props) => {

        const setType = (name) => {
            if(name == "cancel"){
                return "reset";
            }
            return name;
        }
    
        return(
        <div className="button">
            <div>
                <button type={setType(props.values.fieldName)} className="btn btn-primary">{props.values.title}</button>
            </div>
        </div>);
}

export default Button;