import React,{Component} from 'react';
import './Counter.css'

export class Counter extends Component {
   
    constructor(){
      super();
      this.state = {
          count:0
      }
   }

   increement() {
       this.setState((prevValue, props) => {
               return ({
                   count: prevValue.count + 1 + parseInt(props.addValue)
               })
           },
           () => {
               console.log("my call back", this.state.count);
           });
   }

   increementFive() {
       this.increement();
       this.increement();
       this.increement();
       this.increement();
       this.increement();
   }


   render(){
       return (
           <div className="counter">
               <h1>counter is: {this.state.count}</h1>
               <h4>{this.props.children}</h4>
               <button className="button" onClick={()=>this.increementFive()}>Increement</button>
           </div>
       );
   }
}