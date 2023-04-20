import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Posts from './components/posts'

const Main = () => {
    return (
        <div>
            <div id='site-header'>
            <h1 id='site-title'>stranger's things</h1>
        </div>
            <div id = 'mainsite-body'>
                <Posts />
            </div>
        </div>
    )
}

const app = document.getElementById('app');
ReactDom.render(<Main />, app)