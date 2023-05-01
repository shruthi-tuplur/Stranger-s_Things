
// this component renders messages we've sent onto our profile

import React from 'react';

const ProfileOutbox = (props) => {

    const {myMessages, username} = props; 

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    return (<div className='outbox-main-div'>
                    <h2 className='profile-sec-header'>OUTBOX</h2>
                    <div className='outbox-div'>
                        {myMessages.length > 0 && myMessages.filter(message => message.fromUser.username == username).map((message, idx) => {
                            return (
                                <div key = {message._id} className='outbox-post'>
                                    <p className='post-title'>Listing: {message.post.title.toUpperCase()}</p>
                                    <p className='outbox-message-content'><strong id='message-from-user'>{message.fromUser.username}: </strong>{message.content}</p>
                                </div>
                            )
                        })}
                    </div>
        </div>)
}

export default ProfileOutbox;