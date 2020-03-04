import React from 'react';

const Children = (props) => {
    return <div>
        <h1>Children</h1>
        <button onClick={() => props.parentHandler("Ashish")}>Click</button>
    </div>;
}

export default Children;