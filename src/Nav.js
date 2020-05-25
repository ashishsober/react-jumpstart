import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  
//     const navStyle = {
//     'list-style': 'none'
//   }
    
    return (
        <React.Fragment>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="formComp">
                        <li>Form Component</li>
                    </Link>
                    <Link to="postList">
                        <li>All user list</li>
                    </Link>
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Nav
