import React from 'react'
import { withRouter } from 'react-router-dom'

class SignupForm extends React.Component {

    state= {
        user_email: "",
        password: "",
        first_name: "",
        last_name: ""
    }

    signupChangeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value})
    }

    signupHelper = (e) => {
        e.preventDefault()
        this.props.signupHandler(this.state)
        this.setState({
            user_email: "",
            password: "",
            first_name: "",
            last_name: ""
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
                    <label>First Name:</label><br/>
                    <input name="first_name" onChange={this.signupChangeHelper} type="text" placeholder="Michal" value={this.state.first_name} /><br/><br/>
                    <label>Last Name:</label><br/>
                    <input name="last_name" onChange={this.signupChangeHelper} type="text" placeholder="Jordan" value={this.state.last_name} /><br/><br/>
                    <label>Email (How you will log in):</label><br/>
                    <input name="user_email" onChange={this.signupChangeHelper} type="text" placeholder="MJ23@gmail.com" value={this.state.user_email} /><br/><br/>
                    <label>Create Password:</label><br/>
                    <input name="password" onChange={this.signupChangeHelper} type="password" placeholder="Bullz293" value={this.state.password} /><br/><br/>
                    <input type="submit"  value="Sign Up" />
                </form>
                <p>Already have an account? <u onClick={this.switchToLoginHelper} >Log in here</u></p>
                
            </>
        )
    }


}

export default withRouter(SignupForm)
