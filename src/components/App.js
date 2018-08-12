import React, { Component } from 'react';
import { handleInitialData } from '../actions/index';
import { connect } from 'react-redux';
import Dashborard from './dashboard';
import LoadingBar from 'react-redux-loading';
import LeaderBoard from './leaderBoard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading ? null : <LeaderBoard />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authUser === null
  }
}

export default connect(mapStateToProps)(App);