import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class NavBar extends React.Component {

    render(){
        return(
            <>
                
                {this.props.currentUser ?
                <>
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

                        <NavLink to="/profile">
                            <li>Profile</li>
                        </NavLink>

                            <li onClick={this.props.clearUser} >Log Out</li>
                        
                    </ul>
                    <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                </>
                :
                <>
                    <h4>LIFE LETTERS</h4>
                    <ul>
                        <NavLink to="/">
                        <li>About</li>
                        </NavLink>

                        <NavLink to="/login">
                        <li>Log In</li>
                        </NavLink>

                        <NavLink to="/signup">
                        <li>Signup</li>
                        </NavLink>
                    </ul>
                    <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                </>
                }
            </>
        )

    }
}

export default NavBar