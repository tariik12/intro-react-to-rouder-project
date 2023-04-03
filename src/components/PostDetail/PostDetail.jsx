import React from 'react';
import {useLoaderData , useNavigate} from 'react-router-dom';

const PostDetail = () => {
    const post=  useLoaderData()
    console.log(post) 
    const { id, title,body}= post;
    const navigate = useNavigate()
    const handleGoBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Detail here your Post</h3>
            <h6>ID : {id}</h6>
            <h4>Title : {title}</h4>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;