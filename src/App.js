import React from 'react';
import './App.css';
import ListView from './ListView';
import ListItem from './ListItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      listText: {},
      currentText: ""
    }
  }


  render() {
    return (
      <div className="App App-header">
        <ListView listOfNotes={this.state.listItems} storeText={this._updateListItem} updateText={this._captureText} currentText={this.currentText} />
        <ListItem />
      </div>
    );
  }

  _updateListItem = (event) => {
    event.preventDefault();
    const newListItems = [...this.state.listItems];
    newListItems.push(this.state.currentText);
    this.setState({
      listItems: newListItems,
      currentText: ""
    }
    )
  }

  _captureText = (event) => {
    this.setState({
      currentText: event.target.value
    });
  }

  _filterText = () => {
    
  }
}

export default App;
