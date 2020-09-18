import React from 'react'

class LetterForm extends React.Component {
    state = {
        letterObj: {
            user_id: this.props.currentUser.id, 
            letter_title: "",
            recipient_name: "",
            recipient_email: "",
            letter_text: "",
            signoff: ""
                },
        gratitude: false,
        forgiveness :false,
        favemems: false,
        apology: false

    }

    letterChangeHelper = (e) => {
        this.setState({...this.state, letterObj: {...this.state.letterObj, [e.target.name]:e.target.value}})
    }

    componentDidMount = () => {
        if(this.props.toEdit) {
            this.setState({
                ...this.state, letterObj:
                    {
                        user_id: this.props.currentUser.id,
                        letter_title: this.props.toEdit.letter_title,
                        recipient_name: this.props.toEdit.recipient_name,
                        recipient_email: this.props.toEdit.recipient_email,
                        letter_text: this.props.toEdit.letter_text,
                        signoff: this.props.toEdit.signoff
                    }
                })
        }
    }

    createOrEditHelper = (e) => {
        e.preventDefault()
        this.props.createOrEditHandler(this.state.letterObj, this.props.toEdit)
        this.props.backToLetterList()
        this.setState({
            ...this.state, letterObj:
                    {
                        user_id: this.props.currentUser.id, 
                        letter_title: "",
                        recipient_name: "",
                        recipient_email: "",
                        letter_text: "",
                        signoff: ""
                    }
        })
    }

    //Un-dry (wet?) code to deal with changing state of radio buttons
    gratitudeChanger = (e) => {
        this.setState({
                    ...this.state, gratitude: !this.state.gratitude, forgiveness :false, favemems: false, apology: false
                })
    }

    forgivenessChanger = (e) => {
        this.setState({
                    ...this.state, forgiveness: !this.state.forgiveness, gratitude :false, favemems: false, apology: false
                })
    }

    favememsChanger = (e) => {
        this.setState({
                    ...this.state, favemems: !this.state.favemems, gratitude :false, forgiveness: false, apology: false
                })
    }

    apologyChanger = (e) => {
        this.setState({
                    ...this.state, apology: !this.state.apology, gratitude :false, forgiveness: false, favemems: false
                })
    }

    //renders the prompt text based on what radio button is clicked
    promptRenderer = () => {
        if(this.state.gratitude) {
            return (
                <>
                    <p>Say thank you for things that the letter recipient(s) did for you over the years.</p>
                    <p>Example: "I am so grateful for your friendship - you always had my back when things went wrong and picked me up when I was down. I feel so lucky to have had you in my life."</p>
                </>
            )
        } else if (this.state.forgiveness) {
            return (
                <>
                    <p>If you're holding onto any bad feelings toward anyone, forgive them and let them know you care about them.</p>
                    <p>Example: "I know I've been distant over the years. I think I was holding onto a grudge from when we were little. I just want to say that I forgive you and I love you."</p>
                </>
            )
        } else if (this.state.favemems) {
            return (
                <>
                    <p>Think of memories with the letter recipient(s) that were joyful or meaningful to you.</p>
                    <p>Example: "One of my fondest memories is when we built that snowman during the blizzard and dressed it in Dad's clothes which got frozen in place. I don't think I've ever laughed harder. It was worth getting grounded!"</p>
                </>
            )
        } else if (this.state.apology) {
            return (
                <>
                    <p>Take the time to apologize for anything that is on your conscience.</p>
                    <p>Example: "I'm so sorry that I wasn't there for you the way you needed after your divorce. I would do anything to be able to go back in time and do that over."</p>
                </>
            )
        }
    }

    render() {
        return(
            <>
                <button onClick={this.props.backToLetterList}>Back to Letter List</button><br/>
                
                    {this.props.toEdit ? <h4>Edit Your Letter!</h4> : <h4>Create a Letter!</h4> }
                <form onSubmit={this.createOrEditHelper}>
                    <label>Letter Title (Give the letter a name to help your executor identify it)</label><br/>
                    <input name="letter_title" onChange={this.letterChangeHelper} value={this.state.letterObj.letter_title} type="text" placeholder="Mom Letter" />
                    <br/><br/>
                    <label>Recipient Name (Who is it going to?)</label><br/>
                    <input name="recipient_name" onChange={this.letterChangeHelper} value={this.state.letterObj.recipient_name} type="text" placeholder="Marge Simpson" />
                    <br/><br/>
                    <label>Recipient Email (How the recipient will be contacted - if for a group - this will be the point person)</label><br/>
                    <input name="recipient_email" onChange={this.letterChangeHelper} value={this.state.letterObj.recipient_email} type="text" placeholder="marge@gmail.com" />
                    <br/><br/>
                    <label>Letter Text</label><br/>
                    <textarea name="letter_text" onChange={this.letterChangeHelper} value={this.state.letterObj.letter_text} type="text" placeholder="Write the letter here!" />
                    <br/>
                    {this.promptRenderer()}
                    <br/>
                    <label>Your Name (This is how your letter will be "signed" at the bottom)</label><br/>
                    <input name="signoff" onChange={this.letterChangeHelper} value={this.state.letterObj.signoff} type="text" placeholder="Enter your name" />
                    <br/><br/>
                    <input type="submit"  value={this.props.toEdit ? "Save Changes" : "Create Letter" } />
                </form>
                    <br/>
                    <h5>Having trouble finding the right words? Click an option below for guidance</h5>
                    <label>Gratitude</label>
                    <input type="radio" name="gratitude" checked={this.state.gratitude} onClick={this.gratitudeChanger} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Forgiveness</label>
                    <input type="radio" name="forgiveness" checked={this.state.forgiveness} onClick={this.forgivenessChanger} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Favorite Memories</label>
                    <input type="radio" name="favemems" checked={this.state.favemems} onClick={this.favememsChanger} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label>Apology </label>
                    <input type="radio" name="apology" checked={this.state.apology} onClick={this.apologyChanger} />
                    <br/>
            </>
        )
    }


}

export default LetterForm
