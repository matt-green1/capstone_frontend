import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

    render(){
        return(
            <>
                <h3>NAV BAR</h3>
                <ul>
                    <NavLink to="/about">
                        <li>About</li>
                    </NavLink>

                    <NavLink to="letters">
                        <li>My Letters</li>
                    </NavLink>

                    <NavLink to="/executors">
                        <li>My Executors</li>
                    </NavLink>

                    <NavLink to="/">
                        <li>Log Out</li>
                    </NavLink>
                </ul>
            </>
        )

    }
}

export default NavBar