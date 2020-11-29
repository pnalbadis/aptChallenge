import React from 'react';

class Textarea extends React.Component {
    render() {
        return(
            <div className="form-group row">
            <label className="col-sm-4 col-form-label">{this.props.values.label}</label>
            <div className="col-sm-8">
            <textarea
                className="form-control"
                placeholder = {this.props.values.placeholder}
                type={this.props.values.type}
                name={this.props.values.fieldName}
                required={this.props.values.required}
                onChange={(e) => this.props.handleChange(e)}
                >
                </textarea>
            </div>
        </div>);
    }
}

export default Textarea;