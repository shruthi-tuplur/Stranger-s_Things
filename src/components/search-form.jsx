import React, {useEffect, useState} from 'react'

const SearchForm = (props) => {

    const {handleSearchSubmit, setSearchValue} = props;

    return (
        <form id='search-form' onSubmit={handleSearchSubmit}>
                
                <input type='text' name='search' id='search-bar' placeholder='search for items' onChange={(e)=>{setSearchValue(e.target.value)}}></input>
                <button type='submit'>Search</button>
            </form> 
    )
}

export default SearchForm;