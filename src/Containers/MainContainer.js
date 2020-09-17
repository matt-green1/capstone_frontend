import React from 'react'
import LetterContainer from './LetterContainer'
import ExecutorContainer from './ExecutorContainer'
import { Route, Switch, withRouter } from 'react-router-dom'
import HomePage from '../Components/HomePage'

class MainContainer extends React.Component {


    render() {
        return(
            <>    
                <h2>Main Container reporting for duty</h2>
                
                <Switch>
                    <Route path="/home" render={() => <HomePage currentUser={this.props.currentUser} /> } />
                    <Route path="/letters" render={() => <LetterContainer currentUser={this.props.currentUser} createLetterHandler={this.props.createLetterHandler} editLetterHandler={this.props.editLetterHandler} deleteLetterHandler={this.props.deleteLetterHandler} /> } />
                    <Route path="/executors" render={() => <ExecutorContainer currentUser={this.props.currentUser}/> } />
                </Switch>
            </>
        )
    }

}

export default withRouter(MainContainer)