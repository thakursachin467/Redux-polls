import React from 'react'
import { connect } from 'react-redux';

const leaderBoard = ({ users }) => {
    console.log(users);
    return (
        <ul>
            {
                users.map((user) => (
                    <li key={user.id} className="user">
                        <img src={user.avatarURL} alt={`avatar url for ${user.name}`} />
                        <div>
                            <h1>{user.name}</h1>
                            <p>{user.polls} polls</p>
                            <p>{user.answers} answers</p>
                        </div>
                    </li>
                ))
            }
        </ul>

    )
}

function mapStateToProps({ users }) {
    return {
        users: Object.keys(users)
            .map((id) => {
                const { name, avatarURL, polls, answers } = users[id];
                return {
                    id,
                    name,
                    avatarURL,
                    polls: polls.length,
                    answers: answers.length

                }
            })
            .sort((a, b) => b.polls + b.answers > a.polls + a.answers)
    }
}


export default connect(mapStateToProps)(leaderBoard);