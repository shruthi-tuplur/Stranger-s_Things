import React, {useEffect, useState} from 'react'
import { fetchPosts, makePost } from '../api/fetch';
import { useHistory } from 'react-router-dom';

const Posts = (props) => {

    
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState('');
    console.log(props.token);

    const history= useHistory();

    const getPostData = async () => {
        let postData = await fetchPosts();
        setPosts(postData.data.posts)
    }

    useEffect(() => {
        getPostData();
        console.log(posts);
    }, [] )

    const handleSubmit = () => {
        event.preventDefault()
        console.log(props.token);
        let newPostInfo = makePost(title, description, price, willDeliver, props.token);
        console.log(newPostInfo);
        history.push('/posts');
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
                        <input type='text' name = 'new-post-title' onChange={(event) => {setTitle(event.target.value)}}></input>
                        <label  className='new-post-label' htmlFor='new-post-description'>Description: </label>
                        <input type='text' name='new-post-desc' id='new-post-desc' onChange={(event) => {setDescription(event.target.value)}}></input>
                        <label  className='new-post-label' htmlFor='new-post-price'>Price: </label>
                        <input type='text' name='new-post-price' onChange={(event) => {setPrice(event.target.value)}}></input>
                        <label  className='new-post-label' htmlFor='new-post-location'>Location: </label>
                        <input type='text' name='new-post-location'></input>
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