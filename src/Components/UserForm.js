import React from 'react'

class UserForm extends React.Component {
    
    state = {
        first_name: this.props.currentUser.first_name,
        last_name: this.props.currentUser.last_name,
        user_email: this.props.currentUser.user_email,
        password: this.props.currentUser.password
    }

    userFormChangeHelper = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    editUserInfoHelper = (e) => {
        e.preventDefault()
        this.props.editUserInfoHandler(this.state)
        this.props.editStatusChanger()
    }

    render(){
        return(
            <>                
                <br/>
                <form onSubmit={this.editUserInfoHelper} >
                    <label>First Name:</label>&nbsp;&nbsp;
                    <input name="first_name" onChange={this.userFormChangeHelper} value={this.state.first_name} type="text" placeholder="Your First Name" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Last Name:</label>&nbsp;&nbsp;
                    <input name="last_name" onChange={this.userFormChangeHelper} value={this.state.last_name} type="text" placeholder="Your Last Name" />
                    <br/><br/>
                    <label>Email / Login:</label>&nbsp;&nbsp;
                    <input name="user_email" onChange={this.userFormChangeHelper} value={this.state.user_email} type="text" placeholder="yourEmail@gmail.com" />
                    <br/><br/>
                    <label>Password:</label>&nbsp;&nbsp;
                    <input name="password" onChange={this.userFormChangeHelper} value={this.state.password} type="text" placeholder="Mom, Friend, etc." />
                    <br/><br/>
                    <button onClick={this.props.editStatusChanger}>Cancel Edit</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="submit"  value="Save Changes" />
                </form>
            </>
        )
    }
}

export default UserForm