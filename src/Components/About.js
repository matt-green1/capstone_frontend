import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'

// Pre signup or log in background info page
// About component - css id'd as background - need to switch to about (after landing is changed FIRST) - then reflect it in the css notes

class About extends React.Component {

    render() {
        return(
            <>
                <Header as="h1" id="aboutheader">Our Story</Header>
                <div id="aboutsubheader">
                    <p id="aboutlinheight1">There are a lot of services that take care of the legal aspects of the end of a person's life, but many people don't consider the importance of reflecting on their lives and expressing their feelings to those they love.</p>
                </div>
                <div>
                    <p id="aboutbigline">That's where we come in.</p>
                </div>
                <div id="aboutexplainer">
                    <p id="aboutlinheight2">Inspired by <a href="https://med.stanford.edu/letter/friendsandfamily.html">The Stanford Letter Project</a>, we've created an easy way to write and send messages to those you love which will be distributed in the event you pass away, so nothing important gets left unsaid. Death is not something anyone wants to think about, but as Stanford explains:</p>
                    <p id="aboutlinheight4">"On completing the process of doing a life review, most people are able to achieve a measure of peace that comes from deep reflection about key life experiences, and the important relationships they have cultivated. Sadly, almost everyone forgets to do this or postpones it until it is too late. Thus, they never have an opportunity to express the deep love, gratitude, and commitment they feel towards their friends and family."</p>
                    <p id="aboutlinheight5">While the concept may seem morbid, we believe our site will help you identify and appreciate what's most important in your life.</p>
                </div>
            </>
        )
    }
}

export default About