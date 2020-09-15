import React from 'react'
import About from '../Components/About'
import LetterContainer from './LetterContainer'
import ExecutorContainer from './ExecutorContainer'
import { Route, Switch, withRouter } from 'react-router-dom'


class MainContainer extends React.Component {

    componentDidMount() { 
        this.props.history.push("/about")
    }

    render() {
        console.log(this.props)
        return(
            <>    
                <h2>Main Container reporting for duty</h2>
                
                <Switch>
                    <Route path="/about" render={() => <About /> } />
                    <Route path="/letters" render={() => <LetterContainer /> } />
                    <Route path="/executors" render={() => <ExecutorContainer /> } />
                </Switch>
            </>
        )
    }

}

export default withRouter(MainContainer)