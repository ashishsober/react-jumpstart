import React,{Component} from 'react';
import Children from './Children';
import EmailInputComp from './EmailInputComp';
export class Parent extends Component {

    constructor(props){
        super(props);
        this.state= {
            childValue:''
        }
        this.parentHandler = this.greetMethod.bind(this);
    }
    
    greetMethod(value){
        this.setState({
            childValue:value
        })
        alert(`i m inside the parent component ${value} getting called from child`);
    }
    
    render(){
      return(
          <div>
              <h1>Parent</h1>
              <label>children value</label> : {this.state.childValue}<br/>
              <EmailInputComp label="parentName" ></EmailInputComp>
              <Children parentHandler={this.parentHandler}></Children>
          </div>
      )
    }
}
