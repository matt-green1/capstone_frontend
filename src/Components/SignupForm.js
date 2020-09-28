import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Header } from 'semantic-ui-react'

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
                <Header as="h3"> Nice to meet you! Signup below:</Header>
                <br/>
                <Form onSubmit={this.signupHelper}>
                    <Form.Field>
                        <label>First Name</label>
                        <input name="first_name" onChange={this.signupChangeHelper} type="text" value={this.state.first_name} className="signinupinput" />
                    </Form.Field><br/>
                    <Form.Field>
                        <label>Last Name</label>
                        <input name="last_name" onChange={this.signupChangeHelper} type="text" value={this.state.last_name} className="signinupinput"/>
                    </Form.Field><br/>
                    <Form.Field>
                        <label>Email</label>
                        <input name="user_email" onChange={this.signupChangeHelper} type="text" value={this.state.user_email} className="signinupinput"/>
                    </Form.Field><br/>
                    <Form.Field>
                        <label>Create Password</label>
                        <input name="password" onChange={this.signupChangeHelper} type="password" value={this.state.password} className="signinupinput"/>
                    </Form.Field><br/>
                    <Button type="submit" className="submit">Sign Up</Button>
                </Form>
                <br/>
                <p>Already have an account? <u onClick={this.switchToLoginHelper} >Log in here</u></p>
                
            </>
        )
    }


}

export default withRouter(SignupForm)
