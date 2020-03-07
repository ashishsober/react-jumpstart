import React, { Component } from 'react'
import { UserConsumer } from '../context-provider/userContext';

export class ComponentB extends Component {
    
    render() {
        return (
            <React.Fragment>
                <UserConsumer>
                    {
                        (userValue) => {
                            return <h1>{userValue}-- coming from user context in ComponentB,this context we can achive in all the decendants component of ComponentA</h1>

                        }
                    }
                </UserConsumer>
                
            </React.Fragment>
        )
    }
}

export default ComponentB
