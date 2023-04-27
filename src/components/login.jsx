import { async } from 'q';
import React, {useState} from 'react'
import { loginUser } from '../api/fetch';
import { Route, useParams, useHistory } from 'react-router-dom';


const LogIn = ({setToken, token, setIsLoggedIn, username, setUsername}) => {


const [password, setPassword] = useState('');

const history= useHistory();


const handleSubmit = async (event) => {
    event.preventDefault();

    setUsername(username);
    localStorage.setItem('username', username);

    setPassword(password);

    const loginCurrentUser = await loginUser(username, password);

    setToken(loginCurrentUser.data.token);
    
    localStorage.setItem('token', loginCurrentUser.data.token);

    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
    //window.location.href = '/posts';
    history.push('/posts');
    
    
}

return (
    <div>
        
        <form className='register' onSubmit={handleSubmit}>
            <h1 id='sign-in'  className='login-label' >Sign In</h1>
            <div id='username' >
                <label className='login-label' htmlFor='username'>Username: </label>
                <input required type='text' name='username' onChange ={(event) => {
                    setUsername(event.target.value);
                    }}></input>
            </div>
            <div id='password'>
                <label  className='login-label' htmlFor='password'>Password: </label>
                <input required type='password' name='password' onChange ={(event) => {
                    setPassword(event.target.value);
                    }}></input>
            </div>
            <div id='login-button-div'>
            <button id='login-button'>Login</button>
            </div>
        </form>
    </div>
)
}

export default LogIn;