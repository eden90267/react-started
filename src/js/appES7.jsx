import React, {Component} from 'react';
import {render} from 'react-dom';

class App extends Component {
  render () {
    return (
      <div className="ui buttons">
        <button className="ui button active">Cancel</button>
        <div className="or"/>
        <button className="ui positive button">Save</button>
      </div>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
);