import React , { Component } from 'react';
import { Greet } from './greet-component/Greet';
import { Counter } from './counter-component/Counter';
import { Stylesheet } from './stylesheet-component/Stylesheet';
import { Parent } from './components/Parent';
import { FormComponent } from './components/FormComponent';
import {ComponentA} from './components/ComponentA';
import { UserProvider } from './context-provider/userContext';
import { PostList } from './components/PostList';
//stateless class components
export default class App extends Component {

    render(){
        return (
            <div>
                <Greet name="bruce" heroname="abhi"></Greet>
                <Counter addValue="20">
                    i m inside the counter,above value is absolutly correct
                </Counter>
                <Stylesheet primary={true}></Stylesheet>
                <Parent></Parent>
                <br/>
                <FormComponent></FormComponent>
                <br/>
                <UserProvider value="ashish">
                   <ComponentA></ComponentA>
                </UserProvider>   
                <br/>
                <PostList></PostList>
            
            </div>
        )
    }
}


