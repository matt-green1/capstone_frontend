import React from 'react'
import { withRouter } from 'react-router-dom'

class About extends React.Component {

    loginNavHelper = () => {
        this.props.history.push("/login")
    }

    signupNavHelper = () => {
        this.props.history.push("/signup")
    }

    render() {

        return(
            <>
            <h4>About Page</h4>
            <p>Welcome to LifeLetter! Before gettings started we think it's worth getting acquainted with what we are. We exist because... Here are some links</p>

            <h5>Ready to get started?! Log in or Sign up below!</h5>
            <button onClick={this.loginNavHelper} >Log In</button>
            <button onClick={this.signupNavHelper}>Sign Up</button>

            </>
        )
    }


}

export default withRouter(About)