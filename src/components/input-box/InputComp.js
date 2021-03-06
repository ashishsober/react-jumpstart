import React from 'react'

export const InputComp = (props) => {
        return (
            <React.Fragment>
                  <label>{props.title}
                     <input type={props.type} name={props.name} value={props.value} onChange={props.handleChange}/>
                  </label>
                  <span>{props.value}</span>
            </React.Fragment>
        )
}

export default InputComp
