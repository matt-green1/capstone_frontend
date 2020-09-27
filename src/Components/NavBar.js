import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = { 
        activeItem: 'lifeletter' 
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentDiDMount = () => {
        this.setState({activeItem: 'lifeletter' })
    }

    render(){
        const { activeItem } = this.state

        return(
            
            <>  
                {this.props.currentUser ?
                <Segment inverted className="nav" >
                    <Menu inverted pointing secondary>
                        <NavLink to="/home">
                            <Menu.Item
                                name='lifeletter'
                                active={activeItem === 'lifeletter'}
                                onClick={this.handleItemClick}
                            >
                            
                                LifeLetter
                            </Menu.Item>
                        </NavLink>

                        <NavLink to="letters">
                            <Menu.Item
                                name='myletters'
                                active={activeItem === 'myletters'}
                                onClick={this.handleItemClick}
                            >
                                My Letters
                            </Menu.Item>
                        </NavLink>

                        <NavLink to="/executors">
                            <Menu.Item
                                name='myexecutors'
                                active={activeItem === 'myexecutors'}
                                onClick={this.handleItemClick}
                            >
                                My Executors
                            </Menu.Item>
                        </NavLink>
                            
                        <NavLink to="/profile">
                            <Menu.Item
                                name='profile'
                                active={activeItem === 'profile'}
                                onClick={this.handleItemClick}
                            >
                                Profile
                            </Menu.Item>
                        </NavLink>

                        <NavLink onClick={this.props.clearUser} to="/">
                            <Menu.Item>
                                Log Out
                            </Menu.Item>
                        </NavLink>

                    </Menu>
                </Segment>
                :
                <>
                <Segment inverted className="nav">
                    <Menu inverted pointing secondary>
    
                    <NavLink to="/">
                        <Menu.Item
                            name='lifeletter'
                            active={activeItem === 'lifeletter'}
                            onClick={this.handleItemClick}
                        >
                                LifeLetter
                        </Menu.Item>
                    </NavLink>
                        
                    <NavLink to="/login">
                        <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                        >
                                Log In
                        </Menu.Item>
                    </NavLink>

                    <NavLink to="/signup">
                        <Menu.Item
                            name='signup'
                            active={activeItem === 'signup'}
                            onClick={this.handleItemClick}
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