import React from 'react'
import { withRouter } from 'react-router-dom'

import { Button, Container, Header, Segment, Grid, Image, List } from 'semantic-ui-react'


// const HomepageHeading = () => (
//     <Container text>
//       <Header
//         id="aboutlogo"
//         as='h1'
//         content='LifeLetter'
//       />
//       <Header
//         id="aboutslogan"
//         as='h2'
//         content='The personal side of your last wishes'
//       />
//       <Button className="aboutsignupin" basic color='yellow' content='Yellow' onClick={this.loginNavHelper} >
      
//         Log In
//       </Button>
//       <Button className="aboutsignupin" basic color='yellow' content='Yellow' onClick={this.signupNavHelper}>
//         Sign Up
//       </Button>
//     </Container>
//   )
 

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
                // inverted
                textAlign='center'
                // style={{ minHeight: 700, padding: '1em 0em' }}
                //vertical
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
            
                <Header as="h1" id="explainerheader">Easily create personal messages to be delivered in the event that you pass away.</Header>
                <Header as="h2" id="explainersubheader">We take care of the boring stuff, so you can focus on what really matters.</Header>
                <Grid divided='vertically'>
                  <Grid.Row columns={3}>
                    <Grid.Column>
                      <Image src="./images/write_72.png" centered={true} />
                      <Header as="h2">Write</Header>
                      <List>
                        <List.Item>Write all important information in one place, including instructions for distribution.</List.Item>
                        <List.Item>Save and edit your letters so you can take your time and make sure they're just right.</List.Item>
                        <List.Item>We take care of the formatting so you can focus on the text.</List.Item>
                        <List.Item>Our thoughtful writing prompts will help if you're feeling stuck.</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="./images/store.png" centered={true} />
                      <Header as="h2">Store</Header>
                      <List>
                        <List.Item>Keep all of your letters organized in one place until they're ready to send.</List.Item>
                        <List.Item>Choose Executors who will be in charge of distributing your letters.</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="./images/send.png" centered={true} />
                      <Header as="h2">Send</Header>
                      <List>
                        <List.Item>When you're ready, send letters where they need to go with the click of a button.</List.Item>
                        <List.Item>Letters will be exported and stored securely so only Executors can see them.</List.Item>
                      </List>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              
            </Segment>
            </>
        )
    }


}

export default withRouter(Landing)

              //the original sign up button
              // <h4>Ready to get started?! Log in or Sign up below!</h4>
              //   <Button onClick={this.loginNavHelper} >Log In</Button>
              //   <Button onClick={this.signupNavHelper}>Sign Up</Button>


                // <ul>
                //     <li>Write personal messages to your loved ones (will give you prompts to get you started and let you save an come back to them until they're just right).</li>
                //     <li>Designate an "Executors" who will take care of getting the messages to your loved ones.</li>
                //     <li>When finished writing, you can send the letters to your executors with the click of a button.</li>
                // </ul>