import React from 'react'

class LetterForm extends React.Component {
    //this state will just control this form and the prompt - can we put the whole form in one object nested?
    state = {

    }


    render() {

        return(
            <>
                <button onClick={this.props.backToLetterList}>Back to letter list</button><br/>
                
                <h4>Create or Edit A Letter</h4>
                <form>
                    <label>Letter Title (Give the letter a name to help your executor identify it)</label><br/>
                    <input type="text" placeholder="Mom Letter" />
                    <br/><br/>
                    <label>Recipient Name (Who is it going to?)</label><br/>
                    <input type="text" placeholder="Marge Simpson" />
                    <br/><br/>
                    <label>Recipient Email (How the recipient will be contacted)</label><br/>
                    <input type="text" placeholder="marge@gmail.com" />
                    <br/><br/>
                    <label>Letter Type (Is it going to one person or a group?)</label><br/>
                        <label>Individual</label>
                        <input type="radio" />
                        <label>Group</label>
                        <input type="radio" />
                    <br/><br/>
                    <label>Letter Text</label><br/>
                    <textarea type="text" placeholder="Write the letter here!" />
                    <br/><br/>
                    <label>Your Name (This is how your letter will be "signed" at the bottom)</label><br/>
                    <input type="text" placeholder="Enter your name" />
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