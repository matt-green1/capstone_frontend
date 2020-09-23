import React from 'react'
import { withRouter } from 'react-router-dom'

class HomePage extends React.Component {

    buttonRouteHelper = (e) => {
        if(e.target.innerText === "Create Executors") {
            this.props.history.push("/executors")
        } else if (e.target.innerText === "Write Letters") {
            this.props.history.push("/letters")
        } else if (e.target.innerText === "Send Letters") {
            this.props.history.push("/profile")
        }
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
                    <li>Once finished, you can mark your account finished on your profile page and your letters will be sent to your executors for safe keeping. <button onClick={this.buttonRouteHelper}>Send Letters</button></li>
                </ol>
                <br/>
                
            </>
        )
    }


}

export default withRouter(HomePage)