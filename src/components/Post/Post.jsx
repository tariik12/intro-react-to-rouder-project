import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css'
import {useNavigate} from 'react-router-dom'

const Post = ({post}) => {
    const {id, title,body}=post
    const navigate = useNavigate()
    const handleNavigation=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h5>Id: {id}</h5>
          <h5>{title} + </h5> 
          <Link to ={`/post/${id}`}> Show Detail</Link>
          <Link to ={`/post/${id}`}><button>Show Post Details</button></Link>
          <button onClick={handleNavigation}>With Button handler</button>
    
        </div>
    );
};

export default Post;