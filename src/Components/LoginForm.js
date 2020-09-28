import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Form, Header, Grid, Container } from 'semantic-ui-react'

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
                <Container>
                    <Grid columns={2} id="logingrid">
                        {/* <Grid.Row  > */}
                            
                            <Grid.Column centered textAlign="center" >
                                <Header as="h1" id="loginheader" >Welcome back!</Header>
                                <Header as="h2" id="loginsubheader">Log in here  ➯</Header>

                                <p id="loginmessage" >Don't have an account? <u onClick={this.switchToSigninHelper} >Sign up here</u></p>
                            </Grid.Column >
                            
                            <Grid.Column centered id="loginrightcolumn" >
                                <Form onSubmit={this.loginHelper}>
                                    <Form.Field>
                                        <label className="loginlabel">EMAIL</label>
                                        <input name="user_email" onChange={this.loginChangeHelper} type="text" value={this.state.user_email} className="signinupinput"/><br/><br/>
                                    </Form.Field>
                                    <Form.Field className="signinupinput">
                                        <label className="loginlabel">PASSWORD</label>
                                        <input name="password" onChange={this.loginChangeHelper} type="password" value={this.state.password} className="signinupinput"/><br/><br/>
                                    </Form.Field>
                                    <Button type="submit"  className="login">Log In</Button>
                                    {/* Above button originally had this as a prop: width='16' make sure it isn't messing with style to take out */}
                                </Form>
                            </Grid.Column >
                            
                        {/* </Grid.Row> */}
                    </Grid>
                </Container>
            </>
        )
    }


}

export default withRouter(LoginForm)

