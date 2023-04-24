import { async } from 'q';
import React, {useState} from 'react'
import { loginUser } from '../api/fetch';
import { Route, useParams, useHistory } from 'react-router-dom';


const LogIn = ({setToken, token, setIsLoggedIn}) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const history= useHistory();


const handleSubmit = async (event) => {
    event.preventDefault();
    setUsername(username);
    setPassword(password);
    const loginCurrentUser = await loginUser(username, password);
    console.log(loginCurrentUser);
    setToken(loginCurrentUser.data.token);
    setIsLoggedIn(true);
    console.log(token)
    localStorage.setItem('token', loginCurrentUser.data.token);
    //window.location.href = '/posts';
    history.push('/posts');
    
    
}

return (
    <div>
        <form className='register' onSubmit={handleSubmit}>
            <div id='username' >
                <label htmlFor='username'>Username: </label>
                <input required type='text' name='username' onChange ={(event) => {
                    setUsername(event.target.value);
                    }}></input>
            </div>
            <div id='password'>
                <label htmlFor='password'>Password: </label>
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