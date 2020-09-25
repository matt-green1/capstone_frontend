import React from 'react'
import { withRouter } from 'react-router-dom'
//Layout imports below
import PropTypes from 'prop-types'
//import { Component } from 'react'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Sidebar, Visibility } from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
    <Container text>
      <Header
        as='h1'
        content='LifeLetters'
        invertedc
        style={{
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1.5em' : '3em',
        }}
      />
      <Header
        as='h2'
        content='Do whatever you want when you want to.'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button>
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

class About extends React.Component {

    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  

    loginNavHelper = () => {
        this.props.history.push("/login")
    }

    signupNavHelper = () => {
        this.props.history.push("/signup")
    }

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return(
            <>
            
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      


            <br/><br/><br/>
            <h1>Original code:</h1>

            <h1>Welcome to LifeLetter!</h1>
            <h2>The personal side of your last wishes.</h2>
            <img src="https://media.giphy.com/media/brsEO1JayBVja/giphy.gif" />
            
            <p>There are a lot of services that take care of the legal aspects of the end of a person's life, but many people don't think about the importance of reflecting on their lives and expressing their feelings to those they love.</p>
            <p>That's where we come in.</p>

            <p>Inspired by <a href="https://med.stanford.edu/letter/friendsandfamily.html">The Stanford Letter Project</a>, we've created an easy way to write and send messages to those you love which will be distributed in the event you pass away, so nothing important gets left unsaid.</p>
            <p>Death is not something anyone wants to think about, but as Stanford puts it:</p>
            <p>"On completing the process of doing a life review, most people are able to achieve a measure of peace that comes from deep reflection about key life experiences, and the important relationships they have cultivated. Sadly, almost everyone forgets to do this or postpones it until it is too late. Thus, they never have an opportunity to express the deep love, gratitude, and commitment they feel towards their friends and family."</p>
            <p> Life Letters will let you:</p>
            
            <ul>
                <li>Write personal messages to your loved ones (will give you prompts to get you started and let you save an come back to them until they're just right).</li>
                <li>Designate an "Executors" who will take care of getting the messages to your loved ones.</li>
                <li>When finished writing, you can send the letters to your executors with the click of a button.</li>
            </ul>

            <h4>Ready to get started?! Log in or Sign up below!</h4>
            &nbsp;&nbsp;&nbsp;<button onClick={this.loginNavHelper} >Log In</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={this.signupNavHelper}>Sign Up</button>

            </>
        )
    }


}

export default withRouter(About)