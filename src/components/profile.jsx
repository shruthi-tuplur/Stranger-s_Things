import React, {useState} from 'react';

const Profile = (props) => {
    const {username} = props;

    return(
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default Profile