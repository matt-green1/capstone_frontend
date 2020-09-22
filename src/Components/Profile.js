import React from 'react'
import { withRouter } from 'react-router-dom'

class Profile extends React.Component {

    state= {
        button : false
    }

    exportButtonActivator = () => {
        this.setState({button: !this.state.button})
    }

    exportLetterHelper = () => {
        this.setState({button: !this.state.button})
        this.props.exportLetters()
    }

    render() {
        return (
            <>
                <h2>Account Information</h2>
                <h4>Name: {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h4>
                <h4>Email: {this.props.currentUser.user_email} </h4>
                <h4>Password: {this.props.currentUser.password} </h4>
                <br/>
                <h2>Account Stats</h2>
                <h4>Letters Last Sent to Executors: {this.props.currentUser.last_batch} </h4>
                <h4>Number of Letters: {this.props.currentUser.letters.length} </h4>
                <h4>Number of Executors: {this.props.currentUser.executors.length} </h4>                

                <br/>
                <h2>Send Letters</h2>
                {this.props.currentUser.letter_status ? null :
                <div className="ui toggle checkbox">
                    <input type="checkbox" name="public" onChange={this.exportButtonActivator} checked={this.state.button} />
                    <label>Letters ready to send? (will be a toggle button eventually)</label>
                </div>
                }
                <br/>
                
                {this.props.currentUser.letter_status ? <button onClick={this.props.markUnfinished}>Mark Account Unfinished</button> : <button onClick={this.state.button ? this.exportLetterHelper : null}> SEND TO EXECUTORS </button> }
                {this.state.button ? <p>Warning: Clicking the button above will email the letters to your executors. It cannot be undone.</p> : null}
                <h4>Account Status: {this.props.currentUser.letter_status ? "SENT to Executors" : "Not yet finalized"} </h4>
            </>
        )
    }

}

export default withRouter(Profile)