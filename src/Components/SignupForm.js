import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Header, Grid, Container } from 'semantic-ui-react'

class SignupForm extends React.Component {

    state= {
        user_email: "",
        password: "",
        first_name: "",
        last_name: ""
    }

    //Controls sign up form
    signupChangeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value})
    }

    // Calls function in app that sends Post request to create new user
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

    //used in onClick of button to switch to log in page
    switchToLoginHelper = () => {
        this.props.history.push("/login")
    }

    render() {
        return(
            <>
                <Container>
                    <Grid columns={2} id="logingrid">
                        <Grid.Column centered id="signupleftcolumn" textAlign="center">
                            <Header as="h1" id="signupheader"> Nice to meet you!</Header>
                            <Header as="h2" id="signupsubheader"> Sign up here  ➯</Header>
                            <p id="signupmessage">Already have an account? <u onClick={this.switchToLoginHelper} >Log in here</u></p>
                        </Grid.Column>
                        <Grid.Column centered id="signuprightcolumn">
                            <Form onSubmit={this.signupHelper}>
                                <Form.Field>
                                    <label className="signuplabel">FIRST NAME</label>
                                    <input name="first_name" onChange={this.signupChangeHelper} type="text" value={this.state.first_name} className="signinupinput" />
                                </Form.Field><br/>
                                <Form.Field>
                                    <label className="signuplabel">LAST NAME</label>
                                    <input name="last_name" onChange={this.signupChangeHelper} type="text" value={this.state.last_name} className="signinupinput"/>
                                </Form.Field><br/>
                                <Form.Field>
                                    <label className="signuplabel">EMAIL</label>
                                    <input name="user_email" onChange={this.signupChangeHelper} type="text" value={this.state.user_email} className="signinupinput"/>
                                </Form.Field><br/>
                                <Form.Field>
                                    <label className="signuplabel">CREATE PASSWORD</label>
                                    <input name="password" onChange={this.signupChangeHelper} type="password" value={this.state.password} className="signinupinput"/>
                                </Form.Field><br/>
                                <Button type="submit" id="signupbutton">Sign Up</Button>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Container>
            </>
        )
    }


}

export default withRouter(SignupForm)
