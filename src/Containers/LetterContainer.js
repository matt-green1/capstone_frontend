import React from 'react'
import Letter from '../Components/Letter'
import LetterForm from '../Components/LetterForm'

class LetterContainer extends React.Component {

    render() {
        return(
            <>    
                <h3>Letter Container -- I hold letters</h3>
                <Letter />
                <Letter />
                <Letter />
                <LetterForm/>

            </>
        )
    }

}

export default LetterContainer