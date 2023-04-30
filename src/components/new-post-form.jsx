import React from "react";

const NewPostForm = (props) => {

    const {title, setTitle, description, setDescription, price, setPrice, location, setLocation, setWillDeliver, handleSubmit} = props;
return (
    <form className='post-form' onSubmit={handleSubmit}>
                        <div id='new-post-div'>
                            <h3>Create a listing</h3>
                            <label  className='new-post-label' htmlFor='new-post-title'>Title: </label>
                            <input type='text' name = 'new-post-title' value = {title} onChange={(event) => {setTitle(event.target.value)}}></input>

                            <label  className='new-post-label' htmlFor='new-post-description'>Description: </label>
                            <input type='text' name='new-post-desc' id='new-post-desc'  value = {description} onChange={(event) => {setDescription(event.target.value)}}></input>

                            <label  className='new-post-label' htmlFor='new-post-price'>Price: </label>
                            <input type='text' name='new-post-price'  value = {price} onChange={(event) => {setPrice(event.target.value)}}></input>

                            <label  className='new-post-label' htmlFor='new-post-location'>Location: </label>
                            <input type='text' name='new-post-location'  value = {location} onChange={(event) => {setLocation(event.target.value)}} ></input>

                            <div className='new-post-label' >
                                <label htmlFor='will-deliver'>Will you deliver this item?</label>
                                <input type='checkbox' name='will-deliver'onChange={(event) => {
                                    setWillDeliver(event.target.checked);
                                    }}></input>
                            </div>
                            <button type='submit' id='new-post-listing-button'> Post listing</button>
                        </div>
                    </form>
)
}

export default NewPostForm;