import React from 'react';
import './myStyles.css';

export const Stylesheet = (props) => {
    const primary = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${primary} font-xl`}>stylesheet</h1>
        </div>
  );
}