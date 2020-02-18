import React from 'react';

function NoteListItem( {note, selectNote} ) {
    return(
        <li onClick={(event) => selectNote(note.id) }>
            {note.title}
        </li>
    );
}

export default NoteListItem;