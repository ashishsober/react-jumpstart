import React, { Component } from 'react'
// import axios from 'axios';
import users from '../../data/users.json';
import UserBlock from './UserBlock.js';

export class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: users,
            errorMsg: ''
        }
    }

    componentDidMount() {
        // axios.get('http://ec2-3-17-146-125.us-east-2.compute.amazonaws.com:1337/register/user').then(
        //     (response) => {
        //         console.log(response);
        //         this.setState({
        //             data: response.data
        //         })
        //     },
        //     (error) => {
        //         console.log(error);
        //         this.setState({
        //             errorMsg: 'Error retrieving data'
        //         });
        //     });
    }

    render() {
        const { data, errorMsg } = this.state;
        return (
            <React.Fragment>
                <h3 className="ml-3">List of Users</h3>
                <div className="row">
                {
                    data.length ?
                        data.map((data,index) => <UserBlock key={data._id} list={data} index={index}></UserBlock>) :
                        null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
                </div>
                
            </React.Fragment>
        )
    }
}

