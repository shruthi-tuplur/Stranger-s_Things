import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, useHistory } from 'react-router-dom'
import Posts from './components/posts'
import Register from './components/register'
import LogIn from './components/login'
import SetHeader from './components/headers'
import UnauthPosts from './components/unauth-posts'
import Profile from './components/profile'

const Main = () => {
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    let history = useHistory();

    useEffect(() => {
        if(!token){
            setToken(localStorage.getItem('token'))
        }
        
    }, [token])    

    useEffect(() => {
        if(!isLoggedIn){
            setIsLoggedIn(localStorage.getItem('isLoggedIn'))
        }
        
    }, [isLoggedIn])   
    
    useEffect(() => {
        if(!username){
            setUsername(localStorage.getItem('username'));
        }
        
    }, [username])  

    return (
        <BrowserRouter>
        <div id='body-div'>
        <SetHeader setToken={setToken} token={token} isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> 
            <div id = 'mainsite-body'>

                <Route path = '/users/register'>
                    <Register token = {token} setToken = {setToken} />
                </Route>
                <Route path = '/users/login'>
                    <LogIn token = {token} setToken = {setToken} setIsLoggedIn = {setIsLoggedIn} username = {username} setUsername = {setUsername}/>
                </Route>
                <Route path = '/posts'>
                    <Posts token = {token} username = {username} isLoggedIn={isLoggedIn}/>
                </Route>
                <Route exact path='/'>
                    <UnauthPosts/>   
                </Route>  
                <Route path='/users/myprofile'>
                    <Profile username = {username} token={token}/>
                </Route>
            </div>
          
        </div>
          
        </BrowserRouter>
    )
}

const app = document.getElementById('app');
ReactDom.render(<Main />, app)