import React from 'react';
import styles from './userBlock.module.scss';
import { Link } from 'react-router-dom';

function UserBlock({list,index}) {
    return (
        <React.Fragment>
            <div className={`card col-md-3 ml-3 mb-2 ${styles.customCard}`}>
                <Link to={`postList/${list._id}`} >
                        <div className={`card-body`}>
                            <i className={`fa fa-times ${styles.crossIcon}`}></i>
                            <span className={`badge badge-pill badge-danger mb-2` }>{index+1}</span>
                            <h5 className={`card-title`}>{list.first_name}  {list.last_name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted"> { list.email }</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a> */}
                        </div>
                </Link>       
            </div>
        </React.Fragment>
    )
}

export default UserBlock
