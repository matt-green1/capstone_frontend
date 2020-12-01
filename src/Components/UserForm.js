import React from 'react'
import { Header, Button, Message, Container, Form } from 'semantic-ui-react'

// User info form in Profile

class UserForm extends React.Component {
    
    state = {
        first_name: this.props.currentUser.first_name,
        last_name: this.props.currentUser.last_name,
        user_email: this.props.currentUser.user_email,
        password: this.props.currentUser.password
    }

    // Controls form
    userFormChangeHelper = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    // Calls function in app - patch request to change user info - then changes form status in profile back to not being edited
    editUserInfoHelper = (e) => {
        e.preventDefault()
        this.props.editUserInfoHandler(this.state)
        this.props.editStatusChanger()
    }

    render(){
        return(
            <>                
                <div id="edituserform">
                    <Form onSubmit={this.editUserInfoHelper} >
                        <Form.Field>
                            <label className="userlabel">FIRST NAME</label>
                            <input name="first_name" onChange={this.userFormChangeHelper} value={this.state.first_name} type="text" className="userforminput" />
                        </Form.Field>

                        <Form.Field>
                            <label className="userlabel">LAST NAME</label>
                            <input name="last_name" onChange={this.userFormChangeHelper} value={this.state.last_name} type="text" className="userforminput" />
                        </Form.Field>

                        <Form.Field>
                            <label className="userlabel">EMAIL</label>
                            <input name="user_email" onChange={this.userFormChangeHelper} value={this.state.user_email} type="text" className="userforminput" />
                        </Form.Field>

                        <Form.Field>
                            <label className="userlabel">PASSWORD</label>
                            <input name="password" onChange={this.userFormChangeHelper} value={this.state.password} type="text" className="userforminput" />
                        </Form.Field>

                        <Button onClick={this.props.editStatusChanger} id="canceleditprofilebutton" >Cancel Edit</Button>
                        <Button type="submit" id="savechangesprofilebutton">Save Changes</Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default UserForm