import React from 'react';

const ErrorMsg = (props) => {
    return <div className="alert alert-danger" role="alert">{props.field}:{props.message}</div>;
}

export default ErrorMsg;