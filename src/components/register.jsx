
// this component handles allowing new users to create an account

import React, {useState} from 'react'
import { registerUser } from '../api/fetch';


const Register = ({ setToken}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);



    const handleSubmit = async () => {

        // creates new user account with API call
        event.preventDefault();
        setUsername(username);
        setPassword(password);
        const registerNewUser = await registerUser(username, password);
        setToken(registerNewUser.data.token);
        setIsRegistered(true);
        
    }

    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <div>
            <form className='register' onSubmit={handleSubmit}>
                <h2 id='create-acc'  className='login-label' >Create an account</h2>
                <div id='username' >
                    <label htmlFor='username'  className='login-label' >Username: </label>
                    <input required type='text' name='username' onChange ={(event) => {
                        setUsername(event.target.value);
                        }}></input>
                </div>
                <div id='password'>
                    <label htmlFor='password'  className='login-label' >Password: </label>
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