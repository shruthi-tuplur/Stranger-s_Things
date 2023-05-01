
// this component renders the form that allows us to message other users

import React, {useState} from 'react';
import { sendMessage } from '../api/fetch';

const Message = (props) => {

    const {postID, token, setViewMessage, setMessageFrom, username} = props;
    const [messageSent, setMessageSent] = useState(false);
    const [messageContent, setMessageContent] = useState('')

    const handleSubmit = async() => {
        event.preventDefault();
        await sendMessage(postID, token, messageContent);
        setViewMessage(messageContent); // passes the message content up to parent component so it can render in posts
        setMessageFrom(username); // passes the username of the message sender to parent component so the username can be rendered
        setMessageContent(''); // empties form field
        setMessageSent(true) // once this value changes an element renders to let the user know their message has been successfully sent
    } 

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
return(
        <div id='message-form' onSubmit={handleSubmit}>
            <form>
                <label htmlFor='message-input'>Message the seller about this item:</label>
                <input className = 'message-input-field' type='text' name='message-input' value = {messageContent} onChange={(event) => {setMessageContent(event.target.value)}}></input>
                <button type='submit'>Send</button>
                {messageSent && <p>Your message has been sent.</p>}
            </form>
        </div>
    )
}

export default Message