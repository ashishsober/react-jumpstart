import React from 'react'

function ButtonComp(props) {
    return (
        <button type ={props.type} className="btn btn-primary">{props.title}</button>
    )
}

export default ButtonComp
