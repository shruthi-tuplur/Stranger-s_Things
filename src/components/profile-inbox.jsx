import React, {useEffect, useState} from 'react';

const ProfileInbox = (props) => {

    const {posts} = props;

    return (<div className='inbox-div'>
                    <h2 className='profile-sec-header'>INBOX</h2>
                    <div className='posts-div'>
                        { posts && posts.filter(post => post.messages.length>0).map(post => {
                            return (
                            <div key={post._id} className='inbox-post'>
                                    <p className='post-title'>{post.title.toUpperCase()}</p>
                                    {post.messages && post.messages.map((message, idx) => (
                                        <div className='post-messages' key={message.fromUser._id}>
                                            <p><strong id='message-from-user'>{message.fromUser.username}</strong>: {message.content}</p>
                                        </div>
                        ))}
                                </div> )}     
                            )}
                    </div> 
            </div>)

}

export default ProfileInbox;