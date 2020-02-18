import React from 'react';

function NoteListItem( {note, selectNote, id} ) {
    return(
        <li onClick={() => selectNote(id) }>
            {note.title}
        </li>
    );
}

export default NoteListItem;