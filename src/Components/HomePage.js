import React from 'react'
import { withRouter } from 'react-router-dom'

class HomePage extends React.Component {

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

    buttonRouteHelper = (e) => {
        e.target.innerText === "Create Executors" ? this.props.history.push("/executors") : this.props.history.push("/letters")
    }

    render() {
        return(
            <>
                
                <h2>Welcome {this.props.currentUser.first_name}!</h2>

                <h3>LifeLetters lets you record your thoughts and feelings to be sent out in the event that you pass away.</h3>

                <h4>How it works:</h4>
                <ol>
                    <li>Enter one or more "Executors" into your account. Your executors will be in charge of distributing your letters using instructions you provide. <button onClick={this.buttonRouteHelper}>Create Executors</button> </li><br/>
                    <li>Write your letters! Take your time, and come back to edit them for as long as you'd like - they're hard to write! <button onClick={this.buttonRouteHelper}>Write Letters</button> </li><br/>
                    <li>Once finished, you can mark your account finished below and your letters will be sent to your executors for safe keeping.</li>
                </ol>
                <br/>
                
                {this.props.currentUser.letter_status ? null :
                <div className="ui toggle checkbox">
                    <input type="checkbox" name="public" onChange={this.exportButtonActivator} checked={this.state.button} />
                    <label>Letters ready to send? (will be a toggle button eventually)</label>
                </div>
                }
                <br/>
                
                {this.props.currentUser.letter_status ? <button onClick={this.props.markUnfinished}>Mark Account Unfinished</button> : <button onClick={this.state.button ? this.exportLetterHelper : null}> SEND TO EXECUTORS </button> }
                {this.state.button ? <p>Warning: Clicking the button above will email the letters to your executors. It cannot be undone.</p> : null}
                <h3>Letters Status: {this.props.currentUser.letter_status ? "SENT to Executors" : "Not yet finalized"} </h3>
            </>
        )
    }


}

export default withRouter(HomePage)