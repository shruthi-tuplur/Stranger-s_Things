import { fetchPosts } from "../api/fetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const UnauthPosts = () => {

    const [posts, setPosts] = useState([]);

    const getPostData = async () => {
        let postData = await fetchPosts();  
        setPosts(postData.data.posts)
    }

    useEffect(() => {
        getPostData();
        
    }, [] )

    return (
        <div className='posts-div'>
            <h1 id='current-listings'> Current Listings</h1>
                { posts.map(post => {
                    return( 
                    <div key={post._id} className='post'>
                            <p className='post-title'>{post.title.toUpperCase()}</p>
                            <p className='post-author-name'>{post.author.username} - Location: {post.location}</p>
                            <p className='post-description'>{post.description}</p>
                            <p className='post-price'>{post.price}</p>
                        </div> )
                    })}
            <div className="unauth-login">
                <Link to='/users/login'>Login to start buying and selling.</Link>
                <Link to='/users/register'>Don't have an account? Create one now.</Link>
            </div>
            </div> 
    )

}

export default UnauthPosts