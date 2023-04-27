import React, {useEffect, useState} from 'react';
import { GetMe,fetchPosts } from '../api/fetch';

const Profile = (props) => {
    const {username, token} = props;
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [myMessages, setMyMessages] = useState([]);

    const getPostData = async () => {
        let postData = await GetMe(token);
        setPosts(postData.data.posts);
         
        
    }

    useEffect(() => {
        getPostData();
        
    }, [] )
    

    return(
        <div>
        <h1 id='profile-header'>{username}</h1>
        <div className='user-posts'>
                <h2 className='profile-sec-header'>POSTS</h2>
                <div className='posts-div'>
                    { posts && posts.filter(post => post.messages.length>0).map(post => {
                        return (
                        <div key={post._id} className='post'>
                                <p className='post-title'>{post.title.toUpperCase()}</p>
                                {post.messages && post.messages.map((message, idx) => (
                                    <div className='post-messages' key={message.fromUser._id}>
                                        <p><strong id='message-from-user'>{message.fromUser.username}</strong>: {message.content}</p>
                                       
                                    </div>
                    ))}
                            </div> )} 

                            
                        )}

                </div> 
        </div>
        </div>
    )
}

export default Profile;

//.filter(post=>post.active)