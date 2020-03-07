import React, { Component } from 'react'
import ComponentB from './ComponentB';

export class ComponentA extends Component {
    render() {
        return (
            <div style={{border:'1px solid #1274b2'}}>
                ComponentA
                <ComponentB/>
            </div>
        )
    }
}
