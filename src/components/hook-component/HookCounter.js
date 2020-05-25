import React,{useState} from 'react';

function HookCounter() {
    const [name,setName] = useState({firstname:'',lastname:''})
    return (
        <div>
            <input type="text" value={name.firstname} onChange={ e => setName({...name, firstname:e.target.value}) } /><br/>
            <input type="text" value={name.lastname} onChange={ e => setName({...name , lastname:e.target.value}) }/>
            <h3>{name.firstname} -- {name.lastname}</h3>
        </div>
    )
}

export default HookCounter
