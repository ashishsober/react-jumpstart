import React,{Component} from 'react';
import Children from './Children';
import EmailInputComp from './EmailInputComp';
export class Parent extends Component {

    constructor(props){
        super(props);
        this.parentHandler = this.greetMethod.bind(this);
    }
    
    greetMethod(value){
        alert(`i m inside the parent component ${value} getting called from child`);
    }
    
    render(){
      return(
          <div>
              <h1>Parent</h1>
              <EmailInputComp label="parentName" ></EmailInputComp>
              <Children parentHandler={this.parentHandler}></Children>
          </div>
      )
    }
}
