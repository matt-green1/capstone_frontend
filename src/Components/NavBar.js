import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

    render(){
        return(
            <>
                <h3>NAV BAR</h3>
                {this.props.currentUser ?
                
                <ul>
                    <NavLink to="/home">
                        <li>Home</li>
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

                :

                <h1>LIFE LETTERS</h1>

                }
            </>
        )

    }
}

export default NavBar