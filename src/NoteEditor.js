import React from 'react';

function NoteEditor({note, updateNote, copy, updateCopy, title, updateTitle}) {
        return(
                <form onSubmit={(event) => {
                    event.preventDefault();
                    updateNote({id: note.id, title, copy});
                }}>
                    <input onChange={(event) => {updateTitle(event.target.value)}} placeholder="Enter Title Here" value={title}></input>
                    <textarea placeholder="Enter Text Here" onChange={(event) => {updateCopy(event.target.value)}} value={copy}/>
                    <input type="submit" value="Submit"></input>
                </form>
        );
    }

export default NoteEditor;