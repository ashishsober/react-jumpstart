import React,{Component} from 'react';
import EmailInputComp from './EmailInputComp';
import SelectBoxComp from './SelectBoxComp';
import ButtonComp from './ButtonComp';

export class FormComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:'ashish@gmail.com',
            username:'',
            lastname:'',
            topic:''
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeOptionHandler = this.changeOptionHandler.bind(this);
    }

    changeEmailHandler(event){  
        this.setState({
            email:event.target.value
        });
     }

     changeUsernameHandler = (event) =>{  
        this.setState({
            username:event.target.value
        });
     }

     changeLastnameHandler = (event) =>{  
        this.setState({
            lastname:event.target.value
        });
     }

     changeOptionHandler(event){
        this.setState({
            topic:event.target.value
        })
    }

     handleSubmit =(event)=>{
         console.log(`***** my form data -- ${this.state.topic} **************`);
         event.preventDefault();
     }

    render(){
        const options = ["React","Angular","JAVA"];
        return(
            <form onSubmit={this.handleSubmit}>
                <EmailInputComp type="email" name="email" title="Email" handleChange={this.changeEmailHandler} value={this.state.email}></EmailInputComp><br/>
                <EmailInputComp type="text" name="username" title="Username" handleChange={this.changeUsernameHandler} value={this.state.username}></EmailInputComp><br/>
                <EmailInputComp type="text" name="lastname" title="Lastname" handleChange={this.changeLastnameHandler} value={this.state.lastname}></EmailInputComp><br/>
                <SelectBoxComp title="Topic" name="topic" options={options} placeholder="Select Topic" handleChange={this.changeOptionHandler}></SelectBoxComp><br/>
                <ButtonComp type ="submit" title="Submit"></ButtonComp>
            </form>
        )
    }
}