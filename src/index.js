import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Link, useHistory } from 'react-router-dom'
import Posts from './components/posts'
import Register from './components/register'
import LogIn from './components/login'
import SetHeader from './components/headers'


const Main = () => {
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let history = useHistory();

    useEffect(() => {
        if(!token){
            setToken(localStorage.getItem('token'))
        }
        
    }, [token])    

    useEffect(()=>{
        console.log('isLoggedIn: ', isLoggedIn);
    }, [])
    return (
        <BrowserRouter>
        <div id='body-div'>
        <SetHeader setToken={setToken} token={token} isLoggedIn = {isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> 
            <div id = 'mainsite-body'>

                <Route path = '/users/register'>
                    <Register token = {token} setToken = {setToken} />
                </Route>
                <Route path = '/users/login'>
                    <LogIn token = {token} setToken = {setToken} setIsLoggedIn = {setIsLoggedIn}/>
                </Route>
                <Route path = '/posts'>
                    <Posts token = {token}/>
                </Route>
            </div>
           
        </div>
        </BrowserRouter>
    )
}

const app = document.getElementById('app');
ReactDom.render(<Main />, app)