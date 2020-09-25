import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'

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
                <Header as='h3'>Welcome Back! Log in below:</Header><br/>
                <Form onSubmit={this.loginHelper}>
                    <Form.Field width={6}>
                        <label>Email</label>
                        <input name="user_email" onChange={this.loginChangeHelper} type="text" value={this.state.user_email} placeholder="jonedoe@gmail.com" /><br/><br/>
                    </Form.Field>
                    <Form.Field width={6}>
                        <label>Password</label>
                        <input name="password" onChange={this.loginChangeHelper} type="password" value={this.state.password} placeholder="JoneDoe3454" /><br/><br/>
                    </Form.Field>
                    <Button type="submit" width='16' className="loginsubmit">Log In</Button>
                </Form>
                <br/>
                <p>Don't have an account? <u onClick={this.switchToSigninHelper} >Sign up here</u></p>
            </>
        )
    }


}

export default withRouter(LoginForm)

