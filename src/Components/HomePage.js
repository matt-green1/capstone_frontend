import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'

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
                
                <Header as="h1">Welcome {this.props.currentUser.first_name}!</Header>

                <Header as="h2">LifeLetters lets you record your thoughts and feelings to be sent out in the event that you pass away.</Header>

                <Header as="h3">How it works:</Header>
                <ol>
                    <li>Enter one or more "Executors" into your account. Your executors will be in charge of distributing your letters using instructions you provide. <Button onClick={this.buttonRouteHelper}>Create Executors</Button> </li><br/>
                    <li>Write your letters! Take your time, and come back to edit them for as long as you'd like - they're hard to write! <Button onClick={this.buttonRouteHelper}>Write Letters</Button> </li><br/>
                    <li>Once finished, you can mark your account finished on your profile page and your letters will be sent to your executors for safe keeping. <Button onClick={this.buttonRouteHelper}>Send Letters</Button></li>
                </ol>
                
            </>
        )
    }


}

export default withRouter(HomePage)