import React from 'react';
import ErrorMsg from './ErrorMsg';

const Error = (props) => {
    const showErrorMsg = (props) => {
        return Object.keys(props.formErrors).map(function(key, index) {
            return (<ErrorMsg key={index} field={key} message={props.formErrors[key]}/>);
          });
    }

    return(
        <div className="errors row">
            {showErrorMsg(props)}
        </div>
    );
}

export default Error;