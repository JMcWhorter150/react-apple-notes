import React from 'react';
import NoteListItem from './NoteListItem';

function NoteList({notes, selectNote}) {
    return(
        <ul>
            {
                notes.map((note, i) => 
                    (
                        <NoteListItem selectNote={selectNote} key={i} id={i} note={note} />
                    )
                )
            }
        </ul>
    );
}

export default NoteList;