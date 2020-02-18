import React from 'react';

// Use this to set default values if props are not added into the main app
// 
// SearchBar.defaultProps = {
//     text: 'default search text'
// }

function SearchBar({text, handleText}) {
    return(
        <input onChange={(event) => {handleText(event.target.value)}} value={text}/>
    );
}

export default SearchBar;