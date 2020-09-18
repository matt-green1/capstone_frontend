import React from 'react'

class HomePage extends React.Component {

    state= {
        button : false
    }

    exportButtonActivator = () => {
        this.setState({button: !this.state.button})
    }

    exportLetterHelper = () => {
        this.props.exportLetters(this.props.currentUser)
    }

    render() {
        return(
            <>
                
                <h2>Welcome {this.props.currentUser.username}!</h2>

                <h3>LifeLetters lets you record your thoughts and feelings to be sent out in the event that you pass away.</h3>

                <h4>How it works:</h4>
                <ol>
                    <li>Enter one or more "Executors" into your account. Your executors will be in charge of distributing your letters using instructions you provide. <button>Create Executors</button> </li><br/>
                    <li>Write your letters! Take your time, and come back to edit them for as long as you'd like - they're hard to write! <button>Write Letters</button> </li><br/>
                    <li>Once finished, you can mark your account finished below and your letters will be sent to your executors for safe keeping.</li>
                </ol>
                <br/>
                
                <div class="ui toggle checkbox">
                    <input type="checkbox" name="public" onClick={this.exportButtonActivator} checked={this.state.button} />
                    <label>Letters ready to send? (will activate button with a toggle eventually)</label>
                </div>
                <br/>
                
                <button onClick={this.state.button ? this.exportLetterHelper : null}> SEND TO EXECUTORS </button>
                {this.state.button ? <p>Warning: Clicking the button above will email the letters to your executors. It cannot be undone.</p> : null}
            </>
        )
    }


}

export default HomePage