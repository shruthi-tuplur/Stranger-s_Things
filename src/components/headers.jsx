import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const SetHeader = (props) => {

const {isLoggedIn, setToken, token, setIsLoggedIn} = props;
let currentHeader;

const history = useHistory();

if (token && isLoggedIn){
    currentHeader = (
    <div id='site-header'>
    <h1 id='site-title'>stranger's things</h1>   
    <div id='nav-bar-links'>
        
        <button className='nav-bar' id='posts-button' onClick={()=>{
            history.push('/posts');
        }}>Posts</button>
        <button className='nav-bar' id='profile-button' onClick={()=>{
            history.push('/users/myprofile');
        }}>Profile</button>
        <button className = 'nav-bar' id='logout-button' onClick={() => {
            localStorage.removeItem('token');
            setToken('');
            history.push('/');
            setIsLoggedIn(false);
        }}>Logout</button>
        
    </div>
    </div> )
} else {
    currentHeader = (
    <div id='site-header'>
        <h1 id='site-title'>stranger's things</h1>    
        <div id='nav-bar-links'>
            <Link className = 'nav-bar' to='/users/register'>Register</Link>
            <Link className = 'nav-bar' to='/users/login'>Login</Link>
        </div>
    </div>)
}

return (
    <div>
    {currentHeader}
    </div>
)

}
export default SetHeader;