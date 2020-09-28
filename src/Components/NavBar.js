import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class NavBar extends React.Component {
    state = { 
        activeItem: "" 
    }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    // componentDiDMount = () => {
    //     if(this.props.location.href == "http://localhost:3001/home") {
    //         this.setState({activeItem: 'lifeletter' })
    //     } else if (this.props.location.href == "http://localhost:3001/profile") {
    //         this.setState({activeItem: 'profile' })
    //     } else if (this.props.location.href == "http://localhost:3001/letters") {
    //         this.setState({activeItem: 'myletters' })
    //     } else if (this.props.location.href == "http://localhost:3001/executors") {
    //         this.setState({activeItem: 'myexecutors' })
    //     }
    // }

    render(){
        const { activeItem } = this.state
        //console.log(this.props.location.pathname)
        return(
            
            <>  
                {this.props.currentUser ?
                <Segment inverted className="navafter" >
                    <Menu inverted pointing secondary>
                        <NavLink to="/home">
                            <Menu.Item
                                name='lifeletter'
                                active={activeItem === 'lifeletter'}
                                onClick={this.handleItemClick}
                                className="navafterlink"
                            >
                            
                                LifeLetter
                            </Menu.Item>
                        </NavLink>

                        <NavLink to="letters">
                            <Menu.Item
                                name='myletters'
                                active={activeItem === 'myletters'}
                                onClick={this.handleItemClick}
                                className="navafterlink"
                            >
                                My Letters
                            </Menu.Item>
                        </NavLink>

                        <NavLink to="/executors">
                            <Menu.Item
                                name='myexecutors'
                                active={activeItem === 'myexecutors'}
                                onClick={this.handleItemClick}
                                className="navafterlink"
                            >
                                My Executors
                            </Menu.Item>
                        </NavLink>
                            
                        <NavLink to="/profile">
                            <Menu.Item
                                name='profile'
                                active={activeItem === 'profile'}
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
                            active={activeItem === 'lifeletter'}
                            onClick={this.handleItemClick}
                            className="navbeforelink"
                        >
                                LifeLetter
                        </Menu.Item>
                    </NavLink>

                    <NavLink to="/about">
                        <Menu.Item
                            name='about'
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                            className="navbeforelink"
                        >
                                About
                        </Menu.Item>
                    </NavLink>

                    <NavLink to="/login">
                        <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                            className="navbeforelink"
                        >
                                Log In
                        </Menu.Item>
                    </NavLink>

                    <NavLink to="/signup">
                        <Menu.Item
                            name='signup'
                            active={activeItem === 'signup'}
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