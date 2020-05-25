import React from 'react';
import './Greet.css';

export const Greet = (props) => {
    //console.log(props);
   return <h1>Hello greeting of the day to Mr {props.name}-----hi {props.heroname}</h1>;
}