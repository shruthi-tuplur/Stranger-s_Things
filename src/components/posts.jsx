import React, {useEffect, useState} from 'react'
import { fetchPosts, makePost } from '../api/fetch';
import { useHistory } from 'react-router-dom';
import { async } from 'q';

const Posts = (props) => {

    
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState('');
    const [location, setLocation] = useState('');

    const history= useHistory();

    const getPostData = async () => {
        let postData = await fetchPosts();
        setPosts(postData.data.posts)
    }

    useEffect(() => {
        getPostData();
        
    }, [] )

    useEffect(()=>{
        console.log(title);
        console.log(description);
    })

    const handleSubmit = async() => {
        event.preventDefault()
        let newPostInfo = await makePost(title, description, price, willDeliver, location, props.token);
        await getPostData();
        setTitle('');
        setDescription('');
        setPrice('');
        setLocation('');
        setWillDeliver(false);
        
    }

    return (
        <div id='logged-in-main'>
            <div className='posts-div'>
                { posts.map(post => {
                    return( 
                    <div key={post._id} className='post'>
                            <p className='post-title'>{post.title.toUpperCase()}</p>
                            <p className='post-author-name'>{post.author.username} - Location: {post.location}</p>
                            <p className='post-description'>{post.description}</p>
                            <p className='post-price'>{post.price}</p>
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
    )

}

// !willDeliver = user will deliver
export default Posts;