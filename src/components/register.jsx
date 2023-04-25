import { async } from 'q';
import React, {useState} from 'react'
import { registerUser } from '../api/fetch';
import { useParams, Link } from 'react-router-dom';


const Register = ({token, setToken}) => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [isRegistered, setIsRegistered] = useState(false);
const params = useParams(); 


const handleSubmit = async () => {
    event.preventDefault();
    setUsername(username);
    setPassword(password);
    const registerNewUser = await registerUser(username, password);
    setToken(registerNewUser.data.token);
    setIsRegistered(true);
    
}

return (
    <div>
        <form className='register' onSubmit={handleSubmit}>
            <h2 id='create-acc'>Create an account</h2>
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
        {isRegistered && (
            <h2 id='has-registered'>Thank you for registering! Login to start buying and selling.</h2>
        )}
    </div>
)
}

export default Register;