import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        showAnswered: false
    }
    render() {
        console.log(this.props)
        return (
            < div >
                Dashboard
            </div >
        )
    }
}

function mapStateToProps(state) {
    const answers = state.users[state.authUser].answers;


    const answered = answers.map((id) => state.polls[id])
        .sort((a, b) => b.timestamp - a.timestamp);



    const unAnswered = Object.keys(state.polls)
        .filter((id) => !answers.includes(id))
        .map((id) => state.polls[id])
        .sort((a, b) => b.timestamp - a.timestamp);


    return {
        answers,
        answered,
        unAnswered
    }
}

export default connect(mapStateToProps)(Dashboard);

