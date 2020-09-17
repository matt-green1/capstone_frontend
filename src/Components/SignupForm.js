import React from 'react'
import { withRouter } from 'react-router-dom'

class SignupForm extends React.Component {

    state= {
        username: "",
        password: ""
    }

    signupChangeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value})
    }

    signupHelper = (e) => {
        e.preventDefault()
        this.props.signupHandler(this.state)
        this.setState({
            username: "",
            password: ""
        })
    }

    switchToLoginHelper = () => {
        this.props.history.push("/login")
    }

    render() {
        return(
            <>
                <h4>Nice to meet you! Signup below:</h4>
                <form onSubmit={this.signupHelper}>
                    <input name="username" onChange={this.signupChangeHelper} type="text" placeholder="Username here" value={this.state.username} />
                    <input name="password" onChange={this.signupChangeHelper} type="password" placeholder="Password here" value={this.state.password} />
                    <input type="submit"  value="Sign Up" />
                </form>
                <p>Already have an account? <u onClick={this.switchToLoginHelper} >Log in here</u></p>
                
            </>
        )
    }


}

export default withRouter(SignupForm)
