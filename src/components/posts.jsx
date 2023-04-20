import React, {useEffect, useState} from 'react'
import { fetchPosts } from '../api/fetch';






const Posts = () => {

    const [posts, setPosts] = useState([]);

    const getPostData = async () => {
        let postData = await fetchPosts();
        setPosts(postData.data.posts)
    }

    useEffect(() => {
        getPostData();
        console.log(posts);
    }, [] )

    

    return (
       <div>
       { posts.map(post => {
           return( <div key={post._id} className='post'>
                <p className='post-title'>{post.title.toUpperCase()}</p>
                <p className='post-author-name'>{post.author.username} - Location: {post.location}</p>
                <p className='post-description'>{post.description}</p>
                <p className='post-price'>{post.price}</p>
            </div> )
        })}
       </div> 
    )

}

export default Posts;