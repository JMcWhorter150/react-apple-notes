import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchBar from './SearchBar';
import NewNote from './NewNote';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      currentNoteId: "",
      notes: [
      ]
    }
  }


  render() {
    return (
      <Router >
        <div className="App App-header">
        <Nav />
        <Switch>
          <Route exact path="/">
            <NoteList notes={this.state.notes} selectNote={this._selectNote} />
          </Route>
          <Route path="/search">
            <SearchBar text={this.searchText} handleText={this._setSearchText} />
            <NoteList notes={this._getFilteredNotes(this.state.notes)} selectNote={this._selectNote} />
          </Route>
          <Route path="/create">
            <NewNote handleClick={this._createNewNote}/>
            <NoteEditor updateNote={this._updateNote} note={this.state.notes.find(this._grabNote)} />
          </Route>
          <Route path="/:id">
            <NoteEditor updateNote={this._updateNote} note={this.state.notes.find(this._grabNote)} />
          </Route>  
        </Switch>
        </div>
      </Router>
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
