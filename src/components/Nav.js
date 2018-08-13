import React from 'react';

import { NavLink } from 'react-router-dom';


export default () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard" activeClassName="active">
                        leaderboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add" activeClassName="active">
                        Add Polls
                    </NavLink>
                </li>

            </ul>

        </nav>
    )

}

