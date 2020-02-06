import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import NewNote from './NewNote';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      currentNoteId: "",
      notes: [
        {
          id: 'a1b2c3',
          title: 'first note',
          copy: 'la la la la'
        },
        {
          id: '44444',
          title: 'second note',
          copy: 'ba ba'
        },
        {
          id: 'iiiii',
          title: 'third note',
          copy: 'ha ha ha'
        }
      ]
    }
  }


  render() {
    return (
      <div className="App App-header">
        <NewNote handleClick={this._createNewNote}/>
        <SearchBar text={this.searchText} handleText={this._setSearchText} />
        <NoteList notes={this._getFilteredNotes(this.notes)} selectNote={this._selectNote} />
        {this.state.currentNoteId ?
        <NoteEditor updateNote={this._updateNote} note={this.state.notes.find(this._grabNote)} />
        :
        ""
        }
      </div>
    );
  }

  _getFilteredNotes = () => {
    const filteredArray = this.state.notes.filter(note => {
      const titleDoesMatch = note.title.toLowerCase().includes(this.state.searchText.toLowerCase());
      const copyDoesMatch = note.copy.toLowerCase().includes(this.state.searchText.toLowerCase());

      return titleDoesMatch || copyDoesMatch;
    })

    return filteredArray;
  }

  _setSearchText = (searchText) => {
    this.setState({
      searchText
    });
  }

  _selectNote = (currentNoteId) => {
    this.setState({
      currentNoteId
    }, () => {
      const note = this.state.notes.find(this._grabNote);
      this.setState({
        currentCopy: note.copy,
        currentTitle: note.title
      })
    })
  }

  _updateNote = (newNote) => {
    let notePosition = this.state.notes.findIndex(this._grabNote);
    let newNotes = [...this.state.notes];
    newNotes.splice(notePosition, 1, newNote);
    this.setState({
      notes: newNotes,
      currentNoteId: ""
    });
  }


  _createNewNote = () => {
    const randomId = Math.random().toString(36).slice(2);
    const note = {
      id: randomId,
      title: 'New Title',
      copy: 'Type Text Here'
    };
    this.state.notes.push(note);
    this.setState({
      currentNoteId: randomId
    })

  }

  _grabNote = (note) => {return note.id === this.state.currentNoteId}
}
export default App;
