import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Post from '../Post/Post';




const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            <h1>All Posts Here {posts.length}</h1>

            <div>
                {
                    posts.map(post => <Post 
                        post = {post}
                             key ={post.id}
                    ></Post> )

              
                }
            </div>
        </div>
    );
};

export default Posts;