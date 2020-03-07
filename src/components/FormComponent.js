import React,{Component} from 'react';
import EmailInputComp from './EmailInputComp';
import ButtonComp from './ButtonComp';
import axios from 'axios';

export class FormComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:'ashish@gmail.com',
            first_name:'',
            last_name:'',
            pan_no:'',
            mobile:'',
            gender:''
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        //this.changeOptionHandler = this.changeOptionHandler.bind(this);
    }

    changeEmailHandler(event){  
        this.setState({
            email:event.target.value
        });
     }

     changeUsernameHandler = (event) =>{  
        this.setState({
            first_name:event.target.value
        });
     }

     changeLastnameHandler = (event) =>{  
        this.setState({
            last_name:event.target.value
        });
     }

     changePannoHandler = (event) =>{  
        this.setState({
            pan_no:event.target.value
        });
     }

     changeMobileHandler = (event) =>{  
        this.setState({
            mobile:event.target.value
        });
     }

     changeGenderHandler = (event) =>{  
        this.setState({
            gender:event.target.value
        });
     }

    //  changeOptionHandler(event){
    //     this.setState({
    //         topic:event.target.value
    //     })
    // }

     handleSubmit =(event)=>{
         console.log(`***** my form data **************`,this.state);
         event.preventDefault();
         axios.post('http://ec2-3-17-146-125.us-east-2.compute.amazonaws.com:1337/register/user',this.state).then(
             (response) => {
                 console.log(response);
             },
             (error) =>{
                 console.log(error)
             });
     }

    render(){
        //const options = ["React","Angular","JAVA"];
        return(
            <form onSubmit={this.handleSubmit}>
                <EmailInputComp type="text" name="first_name" title="Firstname" handleChange={this.changeUsernameHandler} value={this.state.first_name}></EmailInputComp><br/>
                <EmailInputComp type="text" name="last_name" title="Lastname" handleChange={this.changeLastnameHandler} value={this.state.last_name}></EmailInputComp><br/>
                <EmailInputComp type="email" name="email" title="Email" handleChange={this.changeEmailHandler} value={this.state.email}></EmailInputComp><br/>
                <EmailInputComp type="text" name="pan_no" title="Pan no" handleChange={this.changePannoHandler} value={this.state.pan_no}></EmailInputComp><br/>
                <EmailInputComp type="text" name="mobile" title="Mobile Number" handleChange={this.changeMobileHandler} value={this.state.mobile}></EmailInputComp><br/>
                <EmailInputComp type="text" name="gender" title="Gender" handleChange={this.changeGenderHandler} value={this.state.gender}></EmailInputComp><br/>
                {/* <SelectBoxComp title="Topic" name="topic" options={options} placeholder="Select Topic" handleChange={this.changeOptionHandler}></SelectBoxComp><br/> */}
                <ButtonComp type ="submit" title="Submit"></ButtonComp>
            </form>
        )
    }
}