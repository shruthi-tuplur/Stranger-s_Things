import React, {useEffect, useState} from 'react'
import { fetchPosts, makePost, deletePost } from '../api/fetch';
import FilteredPosts from './filtered-posts';
import UnfilteredPosts from './unfiltered-posts';
import NewPostForm from './new-post-form';
import SearchForm from './search-form';

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


    const getPostData = async () => {
        let postData = await fetchPosts();  
        setPosts(postData.data.posts)
    }

    useEffect(() => {
        getPostData();
        
    }, [] )
   
    const handleSubmit = async() => {
        event.preventDefault()
        await makePost(title, description, price, willDeliver, location, token);
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
             <FilteredPosts posts = {posts} filterString = {filterString} setFilterString = {setFilterString} deleteMyPost = {deleteMyPost} />
        )
    } else {
    
    return (
        <div id='posts-page'>
            <SearchForm handleSearchSubmit={handleSearchSubmit} setSearchValue={setSearchValue} />
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