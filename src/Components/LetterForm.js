import React from 'react'

class LetterForm extends React.Component {
    //this state will just control this form and the prompt - can we put the whole form in one object nested?
    state = {
        letter_title: "",
        recipient_name: "",
        recipient_email: "",
        letter_text: "",
        signoff: ""
    }

    letterChangeHelper = (e) => {
        this.setState({...this.state, [e.target.name]:e.target.value})
       
    }

    componentDidMount = () => {
        if(this.props.toEdit) {
            this.setState({
                letter_title: this.props.toEdit.letter_title,
                recipient_name: this.props.toEdit.recipient_name,
                recipient_email: this.props.toEdit.recipient_email,
                letter_text: this.props.toEdit.letter_text,
                signoff: this.props.toEdit.signoff
            })
        }
    }

    createOrEditHelper = (e) => {
        e.preventDefault()
        this.props.createOrEditHandler(this.state)
    }

    render() {
        return(
            <>
                <button onClick={this.props.backToLetterList}>Back to letter list</button><br/>
                
                    {this.props.toEdit ? <h4>Edit Your Letter!</h4> : <h4>Create a Letter!</h4> }
                <form onSubmit={this.createOrEditHelper}>
                    <label>Letter Title (Give the letter a name to help your executor identify it)</label><br/>
                    <input name="letter_title" onChange={this.letterChangeHelper} value={this.state.letter_title} type="text" placeholder="Mom Letter" />
                    <br/><br/>
                    <label>Recipient Name (Who is it going to?)</label><br/>
                    <input name="recipient_name" onChange={this.letterChangeHelper} value={this.state.recipient_name} type="text" placeholder="Marge Simpson" />
                    <br/><br/>
                    <label>Recipient Email (How the recipient will be contacted - if for a group - this will be the point person)</label><br/>
                    <input name="recipient_email" onChange={this.letterChangeHelper} value={this.state.recipient_email} type="text" placeholder="marge@gmail.com" />
                    <br/><br/>
                    <label>Letter Text</label><br/>
                    <textarea name="letter_text" onChange={this.letterChangeHelper} value={this.state.letter_text} type="text" placeholder="Write the letter here!" />
                    <br/><br/>
                    <label>Your Name (This is how your letter will be "signed" at the bottom)</label><br/>
                    <input name="signoff" onChange={this.letterChangeHelper} value={this.state.signoff} type="text" placeholder="Enter your name" />
                    <br/><br/>
                    <input type="submit"  value="Save Letter" />
                </form>
                    <br/>
                    <h3>Select a Prompt for inspiration</h3>
                    <label>Gratitude</label>
                    <input type="radio" />
                    <label>Apology</label>
                    <input type="radio" />
                    <label>Forgiveness</label>
                    <input type="radio" />
                    <label>Favorite Memories</label>
                    <input type="radio" />
            </>
        )
    }


}

export default LetterForm

                    // Took this out - it only adds unneccessary complexity - ultimately I'd like letter specific instructions
                    // <label>Letter Type (Is it going to one person or a group?)</label><br/>
                    //     <label>Individual</label>
                    //     <input type="radio" />
                    //     <label>Group</label>
                    //     <input type="radio" />
                    // <br/><br/>