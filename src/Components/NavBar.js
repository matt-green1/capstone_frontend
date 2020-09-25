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
        console.log(this.state)
        const { activeItem } = this.state

        return(
            
            <>  
                {this.props.currentUser ?
                <Segment inverted className="nav" >
                    <Menu inverted pointing secondary>
                        
                        <Menu.Item
                        name='lifeletter'
                        active={activeItem === 'lifeletter'}
                        onClick={this.handleItemClick}
                        >
                            <NavLink to="/home">
                                LifeLetter
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item
                        name='myletters'
                        active={activeItem === 'myletters'}
                        onClick={this.handleItemClick}
                        >
                            <NavLink to="letters">
                                My Letters
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item
                        name='myexecutors'
                        active={activeItem === 'myexecutors'}
                        onClick={this.handleItemClick}
                        >
                            <NavLink to="/executors">
                                My Executors
                            </NavLink>
                        </Menu.Item>
                            
                        <Menu.Item
                        name='profile'
                        active={activeItem === 'profile'}
                        onClick={this.handleItemClick}
                        >
                            <NavLink to="/profile">
                                Profile
                            </NavLink>
                        </Menu.Item>

                        <Menu.Item>
                            <NavLink onClick={this.props.clearUser} to="/">
                                Log Out
                            </NavLink>
                        </Menu.Item>

                    </Menu>
                </Segment>
                :
                <>
                <Segment inverted className="nav">
                    <Menu inverted pointing secondary>
    
                    <Menu.Item
                        name='lifeletter'
                        active={activeItem === 'lifeletter'}
                        onClick={this.handleItemClick}
                    >
                        <NavLink to="/">
                            LifeLetter
                        </NavLink>
                    </Menu.Item>
                        
                    <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    >
                        <NavLink to="/login">
                            Log In
                        </NavLink>
                    </Menu.Item>

                    <Menu.Item
                        name='signup'
                        active={activeItem === 'signup'}
                        onClick={this.handleItemClick}
                    >
                        <NavLink to="/signup">
                            Signup
                        </NavLink>
                    </Menu.Item>

                    </Menu>
                </Segment>
                </>
                }
            </>
        )

    }
}

export default withRouter(NavBar)