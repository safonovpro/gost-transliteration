import React from 'react';

export interface OutputProps {
    label: string,
    value: string,
}
 
const Output: React.SFC<OutputProps> = (prop) => {
    return (
        <div className="form-group">
            <label>{ prop.label }</label>
            <textarea className="form-control" value={ prop.value } disabled></textarea>
        </div>
    );
}
 
export default Output;