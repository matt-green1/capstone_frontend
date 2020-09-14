import React from 'react'
import Letter from '../Components/Letter'
import LetterForm from '../Components/LetterForm'
import LifeStatementContainer from './LifeStatementContainer'

class LetterContainer extends React.Component {

    render() {
        return(
            <>    
                <LifeStatementContainer />
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