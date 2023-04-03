import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'


const Friends = () => {
    const friends = useLoaderData();
  
    return (
        <div>
            <h5>They are my Friends {friends.length}</h5>
            <div className='friends'>
                {
                    friends.map(friend =><Friend 
                    key = {friend.id}
                    friend = {friend}
                    
                    />)
                }
            </div>
        </div>
    );
};

export default Friends;