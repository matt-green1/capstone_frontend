import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = { 
        activeItem: "" 
    }
    
    //Selects which Nav bar item is "active" and gets the underline
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        const { activeItem } = this.state
        return(
            
            <>  
                {this.props.currentUser ?
                <Segment inverted className="navafter" >
                    <Menu inverted pointing secondary>
                        <NavLink to="/home">
                            <Menu.Item
                                name='lifeletter'
                                active={this.props.location.pathname === "/home"}
                                onClick={this.handleItemClick}
                                className="navafterlink"
                            >
                                LifeLetter
                            </Menu.Item>
                        </NavLink>

                        <NavLink to="/executors">
                            <Menu.Item
                                name='myexecutors'
                                active={this.props.location.pathname === "/executors"}
                                onClick={this.handleItemClick}
                                className="navafterlink"
                            >
                                My Executors
                            </Menu.Item>
                        </NavLink>
                            
                        <NavLink to="letters">
                            <Menu.Item
                                name='myletters'
                                active={this.props.location.pathname === "/letters"}
                                onClick={this.handleItemClick}
                                className="navafterlink"
                            >
                                My Letters
                            </Menu.Item>
                        </NavLink>

                        <NavLink to="/profile">
                            <Menu.Item
                                name='profile'
                                active={this.props.location.pathname === "/profile"}
                                onClick={this.handleItemClick}
                                className="navafterlink"
                            >
                                Profile
                            </Menu.Item>
                        </NavLink>

                        <NavLink onClick={this.props.clearUser} to="/">
                            <Menu.Item
                                id="logout"
                            >
                                Log Out
                            </Menu.Item>
                        </NavLink>

                    </Menu>
                </Segment>
                :
                <>
                <Segment inverted className="navbefore">
                    <Menu inverted pointing secondary>
    
                    <NavLink to="/">
                        <Menu.Item
                            name='lifeletter'
                            active={this.props.location.pathname === "/"}
                            onClick={this.handleItemClick}
                            className="navbeforelink"
                        >
                                LifeLetter
                        </Menu.Item>
                    </NavLink>

                    <NavLink to="/about">
                        <Menu.Item
                            name='about'
                            active={this.props.location.pathname === "/about"}
                            onClick={this.handleItemClick}
                            className="navbeforelink"
                        >
                                About
                        </Menu.Item>
                    </NavLink>

                    <NavLink to="/login">
                        <Menu.Item
                            name='login'
                            active={this.props.location.pathname === "/login"}
                            onClick={this.handleItemClick}
                            className="navbeforelink"
                        >
                                Log In
                        </Menu.Item>
                    </NavLink>

                    <NavLink to="/signup">
                        <Menu.Item
                            name='signup'
                            active={this.props.location.pathname === "/signup"}
                            onClick={this.handleItemClick}
                            className="navbeforelink"
                        >
                                Signup
                        </Menu.Item>
                    </NavLink>

                    </Menu>
                </Segment>
                </>
                }
            </>
        )
    }
}

export default withRouter(NavBar)