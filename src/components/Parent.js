import React,{Component} from 'react';
import Children from './Children';
import InputComp from './input-box/InputComp';
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
          <div style={{border:'1px solid #1274b2'}}>
              <h1>Parent</h1>
              <label>children value</label> : {this.state.childValue}<br/>
              <InputComp label="parentName" ></InputComp>
              <Children parentHandler={this.parentHandler}></Children>
          </div>
      )
    }
}
