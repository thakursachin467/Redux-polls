import React, { Component, Fragment } from 'react';
import { handleInitialData } from '../actions/index';
import { connect } from 'react-redux';
import Dashborard from './dashboard';
import LoadingBar from 'react-redux-loading';
import LeaderBoard from './leaderBoard';
import Addpolls from './polls';
import Poll from './poll';
import Nav from './Nav';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading ? null : <div>
              <Route path='/' exact component={Dashborard} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/polls/:id' component={Poll} />
              <Route path='/add' component={Addpolls} />
            </div>}
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authUser === null
  }
}

export default connect(mapStateToProps)(App);