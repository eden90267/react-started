import createReactClass from 'create-react-class';
import React from 'react';
import ReactDOM from 'react-dom';

var App = createReactClass({
  render: function () {
    return (
      <div className="ui buttons">
        <button className="ui button active">Cancel</button>
        <div className="or"></div>
        <button className="ui positive button">Save</button>
      </div>
    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);