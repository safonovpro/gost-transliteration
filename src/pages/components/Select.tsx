import React from 'react';

export interface Option {
    value: string,
    title: string,
}

export interface SelectProps {
    label: string,
    items: Array<Option>,
    onChange: Function,
}
 
const Select: React.SFC<SelectProps> = (prop) => {
    const { label } = prop

    return (
        <div className="form-group">
            <label>{ prop.label }</label>
            <select
                className="form-control"
                onChange={ event => prop.onChange(event.target.value) }
                disabled={ prop.items.length <= 1 }
            >
                { prop.items.map((item: Option, index: number) => {
                    return (<option key={ index } value={ item.value }>{ item.title }</option>)
                }) }
            </select>
        </div>
    );
}
 
export default Select;