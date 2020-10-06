import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    )
  }
}
