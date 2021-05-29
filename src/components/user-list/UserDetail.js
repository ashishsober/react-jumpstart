import React, { useState, useEffect } from 'react';
import usersData from '../../data/users.json';

export default function UserDetail({match}) {
    const [user,setUser] = useState({});

    useEffect(() => {
        fetchUser();
    });

    const fetchUser = ()=>{
        const userDetails = usersData.find((value) =>{
            return value._id === match.params.id;
        });
        setUser(userDetails);
    }

    return (
        <React.Fragment>
            <h2>{user.first_name} {user.last_name} </h2>
            <h2>{user.pan_no} </h2>
            <span>{user.gender}</span><br/>
            <span>{user.email}</span><br/>
            <span>{user.mobile}</span>
        </React.Fragment>
    )
}
