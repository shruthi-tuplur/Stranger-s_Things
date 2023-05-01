
// this component renders the search bar at the top of the posts page so that we can apply a keyword search to the posts 

import React from 'react'

const SearchForm = (props) => {

    const {handleSearchSubmit, setSearchValue} = props;

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    return (
        <form id='search-form' onSubmit={handleSearchSubmit}>
                
                <input type='text' name='search' id='search-bar' placeholder='search for items' onChange={(e)=>{setSearchValue(e.target.value)}}></input>
                <button type='submit'>Search</button>
            </form> 
    )
}

export default SearchForm;