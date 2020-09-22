import React from 'react'
import { withRouter } from 'react-router-dom'

class LoginForm extends React.Component {

    state = {
        user_email: "",
        password: ""
    }

    loginChangeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value})
    }

    loginHelper = (e) => {
        e.preventDefault()
        this.props.loginHandler(this.state)
        this.setState({
            user_email: "",
            password: ""
        })
    }

    switchToSigninHelper = () => {
        this.props.history.push("/signup")
    }

    render() {
        return(
            <>
                <h4>Welcome Back! Log in below:</h4>
                <form onSubmit={this.loginHelper}>
                    <label>Email:</label><br/>
                    <input name="user_email" onChange={this.loginChangeHelper} type="text" value={this.state.user_email} placeholder="jonedoe@gmail.com" /><br/><br/>
                    <label>Password:</label><br/>
                    <input name="password" onChange={this.loginChangeHelper} type="password" value={this.state.password} placeholder="JoneDoe3454" /><br/><br/>
                    <input type="submit"  value="Log In" />
                </form>
                <p>Don't have an account? <u onClick={this.switchToSigninHelper} >Sign up here</u></p>
            </>
        )
    }


}

export default withRouter(LoginForm)

