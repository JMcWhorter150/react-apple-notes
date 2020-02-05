import React from 'react';
import NoteListItem from './NoteListItem';

function NoteList({notes, selectNote}) {
    return(
        <ul>
            {
                notes.map(note => 
                    (
                        <NoteListItem selectNote={selectNote} key={note.id} note={note} />
                    )
                )
            }
        </ul>
    );
}

export default NoteList;