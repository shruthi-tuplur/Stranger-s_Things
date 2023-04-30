import Message from './message-form';
import React, {useEffect, useState} from 'react'
import { fetchPosts, makePost, deletePost } from '../api/fetch';

const FilteredPosts = (props) => {

    const {posts, filterString, setFilterString, deleteMyPost} = props;

    return (<div className='posts-div' id='posts-page'>
                    { posts.filter(post => post.title.toLowerCase().includes(filterString.toLowerCase().trim()) || post.description.toLowerCase().includes(filterString.toLowerCase().trim())).map(post => {
                        if(post.author.username == 'dannydevito'){
                        console.log(post.author);
                        console.log(username);
                        console.log(post);}
                        return( 
                        <div key={post._id} className='post'>
                                <p className='post-title'>{post.title.toUpperCase()}</p>
                                <p className='post-author-name'>{post.author.username} - Location: {post.location}</p>
                                <p className='post-description'>{post.description}</p>
                                <p className='post-price'>{post.price}</p>
                                {username == post.author.username && <button id='post-delete-button' onClick={()=>{deleteMyPost(post._id, token)}}>Delete post</button>}
                                {(username == post.author.username && post.messages.length > 0) && post.messages.map((message,idx ) => {
                                    
                                    return ( <div className='post-messages' key={message.fromUser._id}>
                                        <p><strong id='message-from-user'>{message.fromUser.username}</strong>: {message.content}</p>
                                       
                                    </div>)}) }
                                {username !==post.author.username && <Message postID={post._id} token = {token} viewMessage={viewMessage} username = {username} setViewMessage={setViewMessage} setMessageFrom={setMessageFrom}/>}

                            </div> )
                        })}
                    <button onClick={()=>{setFilterString('')}}>Clear filters</button>    

                </div> )
}

export default FilteredPosts