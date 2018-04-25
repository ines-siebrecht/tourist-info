import React, { Component } from 'react';

import DateRange from './component/DateRange/DateRange';
import Museums from './container/Museums/Museums';

import './App.css';

class App extends Component {
  state = {
      startDate: new Date(),
      endDate: new Date(),
  };

  startDateChangeHandler = date => {
      this.setState({startDate: date})
  };

  endDateChangeHandler = date => {
      this.setState({endDate: date})
  };

  render() {
    return (
      <div className="App">
        <h1>Tourist Information</h1>
        <p>Datum und Zeit auswählen und sehen welche Museen geöffnet haben.</p>
        <DateRange
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            startChange={this.startDateChangeHandler}
            endChange={this.endDateChangeHandler} />
        <Museums
            startDate={this.state.startDate}
            endDate={this.state.endDate} />
      </div>
    );
  }
}

export default App;
