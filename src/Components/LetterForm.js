import React from 'react'

class LetterForm extends React.Component {

    render() {

        return(
            <>
                <h4>Create or Edit A Letter</h4>
                <form>
                    <label>Letter Title</label><br/>
                    <input type="text" placeholder="Give the letter a name" />
                    <br/><br/>
                    <label>Recipient Name</label><br/>
                    <input type="text" placeholder="The name you'd call the recipient" />
                    <br/><br/>
                    <label>Recipient Email</label><br/>
                    <input type="text" placeholder="Recipient contact email" />
                    <br/><br/>
                    <label>Letter Type</label><br/>
                    <input type="radio" />
                    <br/><br/>
                    <label>Letter Text</label><br/>
                    <input type="text" placeholder="Give the letter a name" />
                    <br/><br/>
                    <label>Letter Text</label><br/>
                    <textarea type="text" placeholder="Write the letter here!" />
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