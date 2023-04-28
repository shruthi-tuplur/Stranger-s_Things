import React, {useEffect, useState} from 'react'
import { fetchPosts, makePost, deletePost } from '../api/fetch';
import { useHistory } from 'react-router-dom';
import Message from './message-form';
import { async } from 'q';

const Posts = ({username, isLoggedIn, token}) => {

    
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState('');
    const [location, setLocation] = useState('');
    const [viewMessage, setViewMessage] = useState('');
    const [messageFrom, setMessageFrom] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [filterString, setFilterString] = useState('');

    const history= useHistory();

    const getPostData = async () => {
        let postData = await fetchPosts();  
        setPosts(postData.data.posts)
    }

    useEffect(() => {
        getPostData();
        
    }, [] )
   
    const handleSubmit = async() => {
        event.preventDefault()
        let newPostInfo = await makePost(title, description, price, willDeliver, location, token);
        await getPostData();
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setWillDeliver(false);
        
    }

    const deleteMyPost = async(postID, token) => {
        await deletePost(postID, token);
        await getPostData();
    }

 

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setFilterString(searchValue);
        setSearchValue('');

        
    }

    if(filterString){
        return (
            <div className='posts-div' id='posts-page'>
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

                </div> 
        )
    } else {
    
    return (
        <div id='posts-page'>
            <form id='search-form' onSubmit={handleSearchSubmit}>
                
                <input type='text' name='search' id='search-bar' placeholder='search for items' onChange={(e)=>{setSearchValue(e.target.value)}}></input>
                <button type='submit'>Search</button>
            </form> 
            <div id='logged-in-main'>
                <div className='posts-div'>
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

                </div> 
                <aside>
                    <form className='post-form' onSubmit={handleSubmit}>
                        <div id='new-post-div'>
                            <h3>Create a listing</h3>
                            <label  className='new-post-label' htmlFor='new-post-title'>Title: </label>
                            <input type='text' name = 'new-post-title' value = {title} onChange={(event) => {setTitle(event.target.value)}}></input>

                            <label  className='new-post-label' htmlFor='new-post-description'>Description: </label>
                            <input type='text' name='new-post-desc' id='new-post-desc'  value = {description} onChange={(event) => {setDescription(event.target.value)}}></input>

                            <label  className='new-post-label' htmlFor='new-post-price'>Price: </label>
                            <input type='text' name='new-post-price'  value = {price} onChange={(event) => {setPrice(event.target.value)}}></input>

                            <label  className='new-post-label' htmlFor='new-post-location'>Location: </label>
                            <input type='text' name='new-post-location'  value = {location} onChange={(event) => {setLocation(event.target.value)}} ></input>

                            <div className='new-post-label' >
                                <label htmlFor='will-deliver'>Will you deliver this item?</label>
                                <input type='checkbox' name='will-deliver'onChange={(event) => {
                                    setWillDeliver(event.target.checked);
                                    }}></input>
                            </div>
                            <button type='submit' id='new-post-listing-button'> Post listing</button>
                        </div>
                    </form>
                </aside>
        </div>
       </div>
    )
}

}

// !willDeliver = user will deliver
export default Posts;