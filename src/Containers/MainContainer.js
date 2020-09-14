import React from 'react'
import About from '../Components/About'
import LetterContainer from './LetterContainer'
import ExecutorContainer from './ExecutorContainer'


class MainContainer extends React.Component {

    render() {
        return(
            <>    
                <h2>Main Container reporting for duty</h2>
                <About />
                <LetterContainer />
                <ExecutorContainer />
            </>
        )
    }

}

export default MainContainer