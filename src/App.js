import React, { Component } from 'react';
import "./App.scss";
import { Greet } from './components/greet-component/Greet';
import { Counter } from './components/counter-component/Counter';
import { Stylesheet } from './components/stylesheet-component/Stylesheet';
import { Parent } from './components/Parent';
import { FormComponent } from './components/FormComponent';
import { ComponentA } from './components/ComponentA';
import { UserProvider } from './context-provider/userContext';
import { PostList } from './components/user-list/PostList';
import HookCounter from './components/hook-component/HookCounter';
import Nav from './Nav';
import UserDetail from './components/user-list/UserDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//stateless class components
export default class App extends Component {


    render() {
        const Home = () => (
            <React.Fragment>
                <Greet name="bruce" heroname="abhi"></Greet>
                <Counter addValue="20">
                    i m inside the counter,above value is absolutly correct
                    </Counter>
                <Stylesheet primary={true}></Stylesheet>
                <Parent></Parent>
                <br />
                <UserProvider value="ashish">
                    <ComponentA></ComponentA>
                </UserProvider>
                <br />
                <HookCounter></HookCounter>
                <br />
            </React.Fragment>
        )

        const style = {
            'marginTop': '7px'
        };

        const style1 = {
            'paddingRight': '24px',
            'backgroundColor': '#80808036',
            'height': '1000px'
        }
        return (
            <Router>
                <React.Fragment>
                    <h3>Logo</h3>
                    <div className="row" style={style}>
                        <div className="d-none d-md-block col-md-2" style={style1}>
                            <Nav></Nav>
                        </div>
                        <div className="col-md-10">
                            <Switch>
                                <Route path="/" exact component={Home}></Route>
                                <Route path="/formComp" component={FormComponent}></Route>
                                <Route path="/postList" exact component={PostList}></Route>
                                <Route path="/postList/:id" component={UserDetail}></Route>
                            </Switch>
                        </div>
                    </div>
                </React.Fragment>
            </Router>
        )
    }
}


