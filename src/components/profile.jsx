
// this is our main parent component that handles rendering our profile page

import React, {useEffect, useState} from 'react';
import { GetMe } from '../api/fetch';
import ProfileInbox from './profile-inbox'; // renders messages received from other users
import ProfileOutbox from './profile-outbox'; // renders messages sent to other users

const Profile = (props) => {
    const {username, token} = props;
    const [posts, setPosts] = useState([]);
    const [myMessages, setMyMessages] = useState([]);

    const getMyData = async () => {

        // gets user object from API 
        let myData = await GetMe(token);
        setPosts(myData.data.posts);
        setMyMessages(myData.data.messages); 
        console.log(myData.data.messages);
        
    }

    useEffect(() => {
        getMyData();
        
    }, [] )
    
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

