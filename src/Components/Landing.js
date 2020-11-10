import React from 'react'
import { withRouter } from 'react-router-dom'

import { Button, Container, Header, Segment, Grid, Image, List } from 'semantic-ui-react'

//Site homepage when you're not signed in - original place someone lands.

class Landing extends React.Component {

    loginNavHelper = () => {
        this.props.history.push("/login")
    }

    signupNavHelper = () => {
        this.props.history.push("/signup")
    }

    AboutNavHelper = () => {
      this.props.history.push("/about")
  }

    render() {
        return(
            <>
              <Segment
                id="aboutbg"
                textAlign='center'
              >
                <Container text>
                    <Header
                      id="aboutlogo"
                      as='h1'
                      content='LifeLetter'
                    />
                    <Header
                      id="aboutslogan"
                      as='h2'
                      content='The personal side of your last wishes.'
                    />
                    <Button className="aboutsignupin" basic color='yellow' content='Yellow' onClick={this.loginNavHelper} >
                      Log In
                    </Button>
                    <Button className="aboutsignupin" basic color='yellow' content='Yellow' onClick={this.signupNavHelper}>
                      Sign Up
                    </Button>
                </Container>

              </Segment>

              <Segment id="aboutexplainer">
            
                <Header as="h1" id="explainerheader">Create personal messages to your loved ones that will be delivered in the event that you pass away.</Header>
                <Header as="h2" id="explainersubheader">We take care of the boring stuff, so you can focus on what really matters.</Header>
                <Grid divided='vertically'>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Image src="./images/write_72.png" centered={true} />
                      <Header as="h2" className="triadlabel" >Write</Header>
                      <List className="triadlist">
                        <List.Item className="triadlistitem" >Save your progress so you can make sure your messages are just right.</List.Item>
                        <List.Item>Our thoughtful writing prompts will help if you're feeling stuck.</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="./images/store.png" centered={true} />
                      <Header as="h2" className="triadlabel" >Store</Header>
                      <List className="triadlist">
                        <List.Item className="triadlistitem">Keep all of your letters organized in one place until they're ready to send.</List.Item>
                        <List.Item>Choose "Executors" who will be in charge of distributing your letters.</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="./images/send.png" centered={true} />
                      <Header as="h2" className="triadlabel">Send</Header>
                      <List className="triadlist">
                        <List.Item className="triadlistitem">When you're ready, send letters where they need to go with the click of a button.</List.Item>
                        <List.Item>Letters will be exported and stored securely so only Executors can see them.</List.Item>
                      </List>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <div id="landingspacingdiv"></div>
            
            </Segment>
            </>
        )
    }
}

export default withRouter(Landing)
