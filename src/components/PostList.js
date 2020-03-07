import React, { Component } from 'react'
import axios from 'axios';


export class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('http://ec2-3-17-146-125.us-east-2.compute.amazonaws.com:1337/register/user').then(
            (response) => {
                console.log(response);
                this.setState({
                    data: response.data
                })
            },
            (error) => {
                console.log(error);
                this.setState({
                    errorMsg: 'Error retrieving data'
                });
            });
    }

    render() {
        const { data, errorMsg } = this.state;
        return (
            <div style={{ border: '1px solid #1274b2' }}>
                <h3>List Of Posts</h3>
                {
                    data.length ?
                        data.map((data,index) => <div key={data._id}>{index}. {data.first_name} {data.last_name}--- { data.email } </div>) :
                        null
                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

