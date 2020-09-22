import React from 'react'
import { NavLink } from 'react-router-dom'

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
                    <NavLink to="/">
                        <p>About</p>
                    </NavLink>
                    <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                </>
                }
            </>
        )

    }
}

export default NavBar