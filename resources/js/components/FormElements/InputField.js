import React from 'react';

class InputField extends React.Component {
    
    render() {
        return(
        <div className="form-group row">
            <label className="col-sm-4 col-form-label">{this.props.values.label}</label>
            <div className="col-sm-8">
            <input
                className="form-control"
                placeholder = {this.props.values.placeholder}
                type={this.props.values.type}
                name={this.props.values.fieldName}
                onChange={(e) => this.props.handleChange(e)}
                required={this.props.values.required}
            />
            </div>
        </div>);
    }
}

export default InputField;