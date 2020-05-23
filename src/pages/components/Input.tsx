import React from 'react';

export interface OutputProps {
    label: string,
    value: string,
    onChange: Function,
}
 
const Output: React.SFC<OutputProps> = (prop) => {
    return (
        <div className="form-group">
            <label>{ prop.label }</label>
            <textarea className="form-control" value={ prop.value } onChange={ event => prop.onChange( event.target.value ) }></textarea>
        </div>
    );
}
 
export default Output;