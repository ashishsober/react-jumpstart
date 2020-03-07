import React,{Component} from 'react';
import './Counter.css';
import MemoComp from '../components/MemoComp';

export class Counter extends Component {
   
    constructor(props){
      super(props);
      this.state = {
          count:0,
          name:'ashish'
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

   componentDidMount(){
    //    setInterval(()=>{
    //       this.setState({
    //           name:'Ashish'
    //       })
    //    },2000)
   }


   render(){
       console.log("***--- parent component render------***");
       return (
           <div className="counter">
               <h1>counter is: {this.state.count}</h1>
               <h2>{this.state.name}</h2>
               <h4>{this.props.children}</h4>
               <button className="button" onClick={()=>this.increementFive()}>Increement</button>
               <hr/>
               <MemoComp name={this.state.name}></MemoComp>
           </div>
       );
   }
}