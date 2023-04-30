import React, {useEffect, useState} from 'react';
import { GetMe,fetchPosts } from '../api/fetch';
import ProfileInbox from './profile-inbox';
import ProfileOutbox from './profile-outbox';

const Profile = (props) => {
    const {username, token} = props;
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [myMessages, setMyMessages] = useState([]);

    const getMyData = async () => {
        let myData = await GetMe(token);
        setPosts(myData.data.posts);
        setMyMessages(myData.data.messages); 
        console.log(myData.data.messages);
        
    }

    useEffect(() => {
        getMyData();
        
    }, [] )
    

    return(
        <div>
        <h1 id='profile-header'>User: {username}</h1>
        <div className='user-posts'>
                <ProfileInbox posts = {posts} />
                <ProfileOutbox myMessages = {myMessages} username = {username}/>
        </div>
        </div>
    )
}

export default Profile;

//.filter(post=>post.active)