import React from 'react';
import InputField from '../FormElements/InputField';
import Button from '../FormElements/Button';
import Textarea from '../FormElements/Textarea';

const RenderFields = (props) => {

    return props.data.layout.elements.map( (group, index) => {
        var fieldName = group.schema_ref.split('/');
        group.fieldName = fieldName[fieldName.length - 1];
        var required = (props.data.schema.required.includes(fieldName[fieldName.length - 1]))?'required':'';
        group.required = required;

        if(group.type == "button") {
            return <Button key={index} values={group} />;
        } 
        if(group.type == "textarea") {
            return <Textarea key={index} values={group} handleChange={props.handleChange}/>;
        } 
        if(group.type == "text" || group.type=="number") {
            return <InputField key={index} values={group} handleChange={props.handleChange}/>;
        }
    });
}

export default RenderFields;