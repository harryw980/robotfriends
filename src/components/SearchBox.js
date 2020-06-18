import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='tc pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
            />
            <hr></hr>
        </div>
    )
}

export default SearchBox;