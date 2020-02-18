import React from 'react';
import {Link} from 'react-router-dom';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            changedNote: props.note
        }
    }

    render () {
        // best way to grab props in a class is the following:
        const { note, updateNote } = this.props;
        return(
            <form onSubmit={(event) => {
                event.preventDefault();
                updateNote(note.id, this.state.changedNote);
            }}>
                <input onChange={(event) => {this._updateLocalNote({...this.state.changedNote, title: event.target.value})}} placeholder="Enter Title Here" value={this.state.changedNote.title}></input>
                <br />
                <textarea placeholder="Enter Text Here" onChange={(event) => {this._updateLocalNote({...this.state.changedNote, copy: event.target.value})}} value={this.state.changedNote.copy}/>
                <br />
                <Link to="/search">
                    <input type="submit" value="Submit"></input>
                </Link>
            </form>
    );
    }

    _updateLocalNote = (changedNote) => {
        this.setState({
            changedNote
        });
    }
}


export default NoteEditor;