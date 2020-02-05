import React from 'react';
import './App.css';
import ListView from './ListView';
import ListItem from './ListItem';

// need to make a component with a list of notes
// list needs to be searchable
// each item in the list should show a text-area form
// the text in the text box should be saved to the global state as an object
// when they close out of a note, the note data should be saved into an object
// when they click on the item, it should display the note
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      listText: {}
    }
  }


  render() {
    return (
      <div className="App App-header">
        <ListView />
        <ListItem />
      </div>
    );
  }
}

export default App;
