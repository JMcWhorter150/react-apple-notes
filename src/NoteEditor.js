import React from 'react';

function NoteEditor({note, updateNote, copy, updateCopy}) {
        return(
            <div>
                <h2>{note.title}</h2>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    updateNote({id: note.id, title: note.title, copy});
                }}>
                    <textarea onChange={(event) => {updateCopy(event.target.value)}} value={copy}/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }

export default NoteEditor;