import React from 'react'

class LetterForm extends React.Component {

    render() {

        return(
            <>
                <h4>I'm the letter form. we recommend saving your form often!</h4>
                <input type="text" placeholder="New Letter here" />
                <input type="submit"  value="Save Letter" />
            </>
        )
    }


}

export default LetterForm