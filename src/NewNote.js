import React from 'react';

function NewNote({handleClick}) {
    return(
        <button onClick={handleClick}>New Note</button>
    );
}

export default NewNote;