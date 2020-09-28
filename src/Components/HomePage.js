import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Header, Grid } from 'semantic-ui-react'

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
                
                <Header as="h1" id="homemainheader">Welcome {this.props.currentUser.first_name}!</Header>

                <Header as="h2" id="homesubheader">LifeLetter helps you write personal messages that will be sent to your loved ones in the event that you pass away.</Header>
                <Header as="h2" id="homesubheader">It's like a will for your feelings, so nothing important gets left unsaid.</Header>

                <Header as="h3" id="homeinstructionheader">How it works:</Header>
                <Grid id="homegrid">
                    <Grid.Row >
                        <Grid.Column id="homecolumn1">
                            <p className="numberedinstructions">1. Enter one or more "Executors" into your account. Your executors will be in charge of distributing your letters using instructions you provide.</p><br/>
                        </Grid.Column>
                        <Grid.Column>
                            <Button onClick={this.buttonRouteHelper} id="homebutton1" >Create Executors</Button> 
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column id="homecolumn2">
                            <p className="numberedinstructions">2. Write your letters! Take your time and come back to edit them for as long as you'd like. Good writing takes time!</p><br/>
                        </Grid.Column>
                        <Grid.Column>
                            <Button onClick={this.buttonRouteHelper} id="homebutton2" >Write Letters</Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column id="homecolumn1">
                            <p className="numberedinstructions">3. Once finished, you can mark your letters as "ready to send" in your profile and they will be sent to your executors for safe keeping.</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Button onClick={this.buttonRouteHelper} id="homebutton3" >Finalize Account</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </>
        )
    }


}

export default withRouter(HomePage)