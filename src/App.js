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
      currentCopy: "",
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
        <NewNote />
        <SearchBar text={this.searchText} handleText={this._setSearchText} />
        <NoteList notes={this._getFilteredNotes(this.notes)} selectNote={this._selectNote} />
        {this.state.currentNoteId ?
        <NoteEditor updateNote={this._updateNote} copy={this.state.currentCopy} updateCopy={this._updateCopyText} note={this.state.notes.find(this._grabNote)} />
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

  // Should you put this on the listnote component or the list item itself?
  _selectNote = (currentNoteId) => {
    this.setState({
      currentNoteId
    }, () => {
      const note = this.state.notes.find(this._grabNote);
      this.setState({
        currentCopy: note.copy
      })
    })
  }

  _updateNote = (newNote) => {
    let notePosition = this.state.notes.findIndex(this._grabNote);
    let newNotes = [...this.state.notes];
    console.log(newNote)
    console.log(newNotes);
    console.log(notePosition);
    newNotes.splice(notePosition, 1, newNote);
    console.log(newNotes);
    this.setState({
      notes: newNotes,
      currentNoteId: ""
    });
  }

  _updateCopyText = (newText) => {
    this.setState({
      currentCopy: newText
    })
  }

  _grabNote = (note) => {return note.id === this.state.currentNoteId}
}
export default App;
