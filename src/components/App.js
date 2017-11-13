// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Assets
import './Global/css/App.css'

// Componets
import Header from './Global/Header'
import Content from './Global/Content'

// Data

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    const { children } = this.props
    return (
      <div className="App">
        <Header title="Nba - Stats" />
        <Content body={children} />
      </div>
    );
  }
}

export default App;
