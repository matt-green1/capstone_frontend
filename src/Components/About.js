import React from 'react'
import { withRouter } from 'react-router-dom'

class About extends React.Component {

    loginNavHelper = () => {
        this.props.history.push("/login")
    }

    signupNavHelper = () => {
        this.props.history.push("/signup")
    }

    render() {

        return(
            <>
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