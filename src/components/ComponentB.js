import React, { Component } from 'react'
import { UserConsumer } from '../context-provider/userContext';

export class ComponentB extends Component {
    
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (userValue) => {
                            return <h1>{userValue}-- coming from user context in ComponentB,this context we can achive in all the decendants component oF ComponentA</h1>

                        }
                    }
                </UserConsumer>
                
            </div>
        )
    }
}

export default ComponentB
