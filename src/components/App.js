import React, { Component } from 'react';
import { handleInitialData } from '../actions/index';
import { connect } from 'react-redux';
import Dashborard from './dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        {this.props.loading ? null : <Dashborard />}
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