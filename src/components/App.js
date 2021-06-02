import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavRow from './Nav'
import ListQuestions from './ListQuestions'
import NewQuestion from './NewQuestion'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Fragment } from 'react';
import QuestionPage from './QuestionPage';
import LeaderBoard from './LeaderBoard'
import login from './login'







class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
            <NavRow />
            
          <div>
          <Route path='/' exact component={ListQuestions}/> 
          <Route path='/newQuestion' exact component={NewQuestion}/> 
          <Route path='/question/:id' exact component={QuestionPage}/>
          <Route path='/LeaderBoard' exact component={LeaderBoard}/>
          <Route path='/login' component={login}/>
          </div>

      </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
