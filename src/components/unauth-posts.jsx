
// this component loads posts on "homepage" that we can see before we're logged in; this will give us a view of the listings without the post interaction features only available to authenticated users

import { fetchPosts } from "../api/fetch";
import { useEffect, useState } from "react";
import SearchForm from './search-form';
import FilteredPosts from "./filtered-posts";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const UnauthPosts = () => {

    const [posts, setPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [filterString, setFilterString] = useState('');

    const username = '';
    const deleteMyPost = '';
    const token = '';

    const getPostData = async () => {

        // fetches posts from API
        let postData = await fetchPosts();  
        setPosts(postData.data.posts)
    }

    useEffect(() => {

        // loads posts immediately when the page loads
        getPostData();
        
    }, [] )


    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setFilterString(searchValue);
        getPostData();
        setSearchValue('');
    }
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
if(filterString){
    return (
         <FilteredPosts token = {token} username = {username} posts = {posts} filterString = {filterString} setFilterString = {setFilterString} deleteMyPost = {deleteMyPost} />
    )
} else {
    return (
        <div className='posts-div'>
            <SearchForm handleSearchSubmit={handleSearchSubmit} setSearchValue={setSearchValue} setFilterString={setFilterString}/>
            <h1 id='current-listings'> Current Listings</h1>
                { posts.map(post => {
                    return( 
                    <div key={post._id} className='post'>
                            <p className='post-title'>{post.title.toUpperCase()}</p>
                            <p className='post-author-name'>{post.author.username} - Location: {post.location}</p>
                            <p className='post-description'>{post.description}</p>
                            <p className='post-price'>{post.price}</p>
                        </div> )
                    })}
            <div className="unauth-login">
                <Link to='/users/login'>Login to start buying and selling.</Link>
                <Link to='/users/register'>Don't have an account? Create one now.</Link>
            </div>
            </div> 
    )

}
}

export default UnauthPosts;