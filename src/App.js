import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import LoginForm from './Components/LoginForm'
import SignupForm from './Components/SignupForm'
import MainContainer from './Containers/MainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends React.Component {
  state = {
    currentUser : {name: "matt"}
  }
  
// Need to push to "/login upon landing"

  render(){
  
    return (
      <>
        <NavBar/>
        
        <Switch>
          {this.state.currentUser
          ? 
          <>
              <Route path="/" render={() => <MainContainer /> }/>
          </>
          :
          <>
            <Route exact path="/" render={() => <LoginForm/>} />
            <Route path="/signup" render={() => <SignupForm/>} />
          </>
        }
        </Switch>
      </>
    );
  }
}
export default withRouter(App);


