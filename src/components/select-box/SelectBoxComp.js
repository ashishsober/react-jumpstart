import React from 'react'

export const SelectBoxComp =(props) => {
        const options = props.options.map((option) => <option value={option} key={option} label={option}>{option}</option>)
        return (
            <div>
                <label>{props.title}</label>
                <select name={props.name} onChange={props.handleChange}>
                    <option value="">{props.placeholder}</option>
                    {options}
                </select>
                {/* <span>{this.state.selectedValue}</span> */}
            </div>
        )
}

export default SelectBoxComp;
