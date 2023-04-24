import React from 'react';
import {Link} from 'react-router-dom';

const SetHeader = (props) => {

const {isLoggedIn, setToken, token} = props;
let currentHeader;

if (token){
    currentHeader = (
    <div id='site-header'>
    <h1 id='site-title'>stranger's things</h1>   
    <div id='nav-bar-links'>
        <button className = 'nav-bar' id='logout-button' onClick={() => {
            setToken('');
            console.log(token);
            window.location.href = '/users/login';
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
            <button className = 'nav-bar' id='logout-button' onClick={() => {
            localStorage.removeItem('token');
            window.location.href = '/users/login';
            setToken('');   
        }}>Logout</button>
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