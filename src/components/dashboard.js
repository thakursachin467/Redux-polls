import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        showAnswered: false
    }

    showUnanswered = () => {
        this.setState(() => ({
            showAnswered: false
        }))
    }

    showAnswered = () => {
        this.setState(() => ({
            showAnswered: true
        }))
    }
    render() {
        const { showAnswered } = this.state;
        const { answered, unAnswered } = this.props;
        const list = showAnswered === true ? answered : unAnswered;
        return (
            < div >
                <div className='dashboard-toggle'>
                    <button style={{ textDecoration: showAnswered === false ? 'underline' : null }} onClick={this.showUnanswered}>Unanswered</button>
                    <span>|</span>
                    <button style={{ textDecoration: showAnswered === true ? 'underline' : null }} onClick={this.showAnswered}>Answered</button>
                </div>

                <ul className="dashborad-list">
                    {
                        list.map((poll) => (
                            <li key={poll.id}>
                                {poll.question}
                            </li>
                        ))
                    }
                </ul>
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

