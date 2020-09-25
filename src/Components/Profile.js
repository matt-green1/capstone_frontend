import React from 'react'
import { withRouter } from 'react-router-dom'
import UserForm from './UserForm'

class Profile extends React.Component {

    state= {
        button : false,
        editButton : false
    }

    exportButtonActivator = () => {    
        if(this.props.currentUser.letters.length > 0 && this.props.currentUser.executors.length > 0 ) {
            this.setState({...this.state, button: !this.state.button})
        } else {
            window.alert("Must have at least one letter and one executor to finalize account.")
        }
    }

    exportLetterHelper = () => {
        this.setState({...this.state, button: !this.state.button})
        this.props.exportLetters()
    }

    editStatusChanger = () => {
        this.setState({...this.state, editButton: !this.state.editButton})
    }

    passwordRedactor = () => {
        let passwordLength = this.props.currentUser.password.length
        return "*".repeat(passwordLength)
    }

    render() {
        this.passwordRedactor()
        return (
            <>
                <h2>Account Information</h2>
                {this.state.editButton
                ?
                <UserForm currentUser={this.props.currentUser} editStatusChanger={this.editStatusChanger} editUserInfoHandler={this.props.editUserInfoHandler}/>
                :
                <>
                    <h4>Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h4>
                    <h4>Email: {this.props.currentUser.user_email} </h4>
                    <h4>Password: {this.passwordRedactor()} </h4>
                    
                    <button onClick={this.editStatusChanger}> Edit Account Information </button>
                </>
                }

                <br/><br/>
                <h2>My Letters</h2>
                <h4>Letters last sent to executors on: {this.props.currentUser.last_batch} </h4>
                <h4>Number of Letters: {this.props.currentUser.letters.length} </h4>
                <h4>Number of Executors: {this.props.currentUser.executors.length} </h4>                

                <br/>
                <h2>Finalize Account</h2>
                {this.props.currentUser.letter_status ? null :
                <div className="ui toggle checkbox">
                    <input type="checkbox" name="public" onChange={this.exportButtonActivator} checked={this.state.button} />
                    <label>Letters ready to send?</label>
                </div>
                }
                <br/><br/>
                
                {this.props.currentUser.letter_status ? <button onClick={this.props.markUnfinished}>Mark Account Unfinished</button> : <button onClick={this.state.button ? this.exportLetterHelper : null}> SEND TO EXECUTORS </button> }
                {this.state.button ? <p>Warning: Clicking the button above will email the letters to your executors. It cannot be undone.</p> : null}
                <h4>Current Letter Status: {this.props.currentUser.letter_status ? "Sent to Executors" : "Not Sent"} </h4>
            </>
        )
    }

}

export default withRouter(Profile)