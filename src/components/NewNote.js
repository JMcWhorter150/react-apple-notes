import React from 'react';
import {Link} from 'react-router-dom';

function NewNote({handleClick}) {
    return(
        <Link to="/create">
            <button onClick={handleClick}>New Note</button>
        </Link>
    );
}

export default NewNote;