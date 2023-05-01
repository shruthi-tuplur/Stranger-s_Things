
// this component renders posts when we do not have a keyword search filter applied 

import React from 'react'
import Message from './message-form'; // this component allows users to send messages on posts that are not their own posts

const UnfilteredPosts = (props) => {

    const {posts, deleteMyPost, token, viewMessage, setViewMessage, username, setMessageFrom} = props;

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------    

   return ( <div className='posts-div'>
            { posts.map(post => {
                        
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