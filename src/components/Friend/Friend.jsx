import React from 'react';
import './Friend.css'
import {Link} from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)
    const {id, name, username,email,website,phone }= friend
    return (
        <div className='friend'>
            <h1>{name}</h1>
            <h4>{username}</h4>
            <h6>{email}</h6>
            <p>{website}</p>
            <p>{phone}</p>
            <p><Link to={`/friend/${id}`} >Show me details</Link></p>
        </div>
    );
};

export default Friend;