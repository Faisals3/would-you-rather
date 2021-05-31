import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavRow from './Nav'
import ListQuestions from './ListQuestions'
import NewQuestion from './NewQuestion'





class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
       <NavRow />
       <ListQuestions />
       <NewQuestion/>
      </div>
    )
  }
}

export default connect(null)(App);
