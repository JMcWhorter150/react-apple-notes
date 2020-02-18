import React from 'react';

class NoteEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            changedNote: props.note ? props.note : {
                id: Math.random().toString(36).slice(2),
                title: 'New Title',
                copy: 'Type Text Here'
            }
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.note) {
            if (props.note.id === state.changedNote.id) {
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    changedNote: {
                        ...props.note
                    }
                }
            }
        } else {
            return {
                ...state
            }
        }
    }

    render () {
        // best way to grab props in a class is the following:
        const { note, updateNote } = this.props;
        return(
            <form onSubmit={(event) => {
                event.preventDefault();
                updateNote(this.state.changedNote);
            }}>
                <input onChange={(event) => {this._updateLocalNote({...this.state.changedNote, title: event.target.value})}} placeholder="Enter Title Here" value={this.state.changedNote.title}></input>
                <br />
                <textarea placeholder="Enter Text Here" onChange={(event) => {this._updateLocalNote({...this.state.changedNote, copy: event.target.value})}} value={this.state.changedNote.copy}/>
                <br />
                <input type="submit" value="Submit"></input>
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