import { async } from 'q';
import React, {useState} from 'react'
import { registerUser } from '../api/fetch';
import { useParams, Link } from 'react-router-dom';


const Register = ({token, setToken}) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const params = useParams(); 


const handleSubmit = async () => {
    event.preventDefault();
    setUsername(username);
    setPassword(password);
    const registerNewUser = await registerUser(username, password);
    console.log(registerNewUser);
    setToken(registerNewUser.data.token);

    
    window.location.href = '/users/login';
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
            <div id='register-button-div'>
            <button id='register-button'>Register</button>
            </div>
        </form>
    </div>
)
}

export default Register;