import React, {useEffect, useState} from 'react'
import { fetchPosts, makePost, deletePost } from '../api/fetch';
import Message from './message-form';

const UnfilteredPosts = (props) => {

    const {posts, deleteMyPost, token, viewMessage, setViewMessage, username, setMessageFrom} = props;

   return ( <div className='posts-div'>
            { posts.map(post => {
                        if(post.author.username == 'dannydevito'){
                        console.log(post.author);
                        console.log(username);
                        console.log(post);}
                        return( 
                        <div key={post._id} className='post'>
                                <p className='post-title'> {post.title.toUpperCase()}</p>
                                <p className='post-author-name'><strong>Post author: </strong> {post.author.username} - Location: {post.location}</p>
                                <p className='post-description'><strong>Description: </strong> {post.description}</p>
                                <p className='post-price'><strong>Price: </strong> {post.price}</p>
                                {username == post.author.username && <button id='post-delete-button' onClick={()=>{deleteMyPost(post._id, token)}}>Delete post</button>}
                                {(username == post.author.username && post.messages.length > 0) && post.messages.map((message,idx ) => {
                                    
                                    return ( <div className='post-messages' key={message.fromUser._id}>
                                        <p><strong id='message-from-user'>{message.fromUser.username}</strong>: {message.content}</p>
                                       
                                    </div>)}) }
                                {username !==post.author.username && <Message postID={post._id} token = {token} viewMessage={viewMessage} username = {username} setViewMessage={setViewMessage} setMessageFrom={setMessageFrom}/>}

                        </div> )
                        })}

    </div> )

}

export default UnfilteredPosts;