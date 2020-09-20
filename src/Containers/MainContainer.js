import React from 'react'
import LetterContainer from './LetterContainer'
import ExecutorContainer from './ExecutorContainer'
import { Route, Switch, withRouter } from 'react-router-dom'
import HomePage from '../Components/HomePage'

class MainContainer extends React.Component {


    render() {
        return(
            <>                    
                <Switch>
                    <Route path="/home" render={() => <HomePage currentUser={this.props.currentUser} exportLetters={this.props.exportLetters} markUnfinished={this.props.markUnfinished} /> } />
                    <Route path="/letters" render={() => <LetterContainer currentUser={this.props.currentUser} createLetterHandler={this.props.createLetterHandler} editLetterHandler={this.props.editLetterHandler} deleteLetterHandler={this.props.deleteLetterHandler} /> } />
                    <Route path="/executors" render={() => <ExecutorContainer currentUser={this.props.currentUser} createExecutorHandler={this.props.createExecutorHandler} editExecutorHandler={this.props.editExecutorHandler} deleteExecutorHandler={this.props.deleteExecutorHandler}/> } />
                </Switch>
            </>
        )
    }

}

export default withRouter(MainContainer)