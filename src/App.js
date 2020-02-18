import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchBar from './containers/SearchBarContainer';
import NewNote from './containers/NewNoteContainer';
import NoteEditor from './containers/NoteEditorContainer';
import NoteList from './containers/NoteListContainer';
import Nav from './components/Nav';
import notes from './reducers';

const store = createStore(notes);

window.store = store;

function App () {
    return (
      <Provider store={store}>
        <Router >
          <div className="App App-header">
          <Nav />
          <Switch>
            <Route exact path="/">
              <NewNote />
              <h1>Apple Note Editor</h1>
            </Route>
            <Route path="/search">
              <SearchBar />
              <NoteList />
            </Route>
            <Route path="/create">
              <NoteEditor />
            </Route>
            <Route path="/:id" component={NoteEditor} />
          </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
  
export default App;
