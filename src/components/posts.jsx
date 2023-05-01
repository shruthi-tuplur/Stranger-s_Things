
// this is the main component for handling posts, including the search form, the new post form, and both filtered and unfiltered posts

import React, {useEffect, useState} from 'react'
import { fetchPosts, makePost, deletePost } from '../api/fetch';
import FilteredPosts from './filtered-posts'; // renders posts when a search filter is applied
import UnfilteredPosts from './unfiltered-posts'; // renders posts when a search filter is not applied
import NewPostForm from './new-post-form'; // form to create new posts
import SearchForm from './search-form'; // form to enter search string


const Posts = ({username, token}) => {

    
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


    const getPostData = async () => {
        let postData = await fetchPosts();  
        setPosts(postData.data.posts)
    }

    useEffect(() => {

        // renders posts immediately after page is loaded
        getPostData();
        
    }, [] )
   
    const handleSubmit = async() => {
        event.preventDefault()
        await makePost(title, description, price, willDeliver, location, token); // API call to create a new post
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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    if(filterString){
        return (
             <FilteredPosts token = {token} username = {username} posts = {posts} filterString = {filterString} setFilterString = {setFilterString} deleteMyPost = {deleteMyPost} setMessageFrom = {setMessageFrom} setViewMessage = {setViewMessage} viewMessage={viewMessage}/>
        )
    } else {
    
    return (
        <div id='posts-page'>
            <SearchForm handleSearchSubmit={handleSearchSubmit} setSearchValue={setSearchValue} setFilterString={setFilterString}/>
            <div id='logged-in-main'>
                <UnfilteredPosts posts = {posts} deleteMyPost={deleteMyPost} token = {token} viewMessage = {viewMessage} setViewMessage = {setViewMessage} username = {username} setMessageFrom = {setMessageFrom} />
                <aside>
                    <NewPostForm title={title} setTitle={setTitle} description={description} setDescription={setDescription} price={price} setPrice={setPrice} location={location} setLocation={setLocation} setWillDeliver={setWillDeliver} handleSubmit={handleSubmit} />
                </aside>
            </div>
       </div>
    )
}

}

// !willDeliver = user will deliver
export default Posts;