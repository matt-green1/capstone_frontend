import React from 'react'

class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    loginChangeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value})
    }

    loginHelper = (e) => {
        e.preventDefault()
        this.props.loginHandler(this.state)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return(
            <>
                <h4>Login form here</h4>
                <form onSubmit={this.loginHelper}>
                    <input name="username" onChange={this.loginChangeHelper} type="text" value={this.state.username} placeholder="Username here" />
                    <input name="password" onChange={this.loginChangeHelper} type="text" value={this.state.password} placeholder="Password here" />
                    <input type="submit"  value="Log In" />
                </form>
                <p>Don't have an account? <a href="/signup">Sign up here</a></p>
            </>
        )
    }


}

export default LoginForm