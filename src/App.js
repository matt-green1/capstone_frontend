import React from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import LoginForm from './Components/LoginForm'
import SignupForm from './Components/SignupForm'
import MainContainer from './Containers/MainContainer'
import { Route, Switch, withRouter } from 'react-router-dom'
import About from './Components/About'

class App extends React.Component {
  state = {
    currentUser : null
  }
  

  loginHandler = (loginInfo) => {
    
    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({user: loginInfo})
    }   
    
    fetch("http://localhost:3000/login", configObj)
    .then(response => response.json())
    .then(userObj => {
      if (userObj){
        //localStorage.setItem("user", userObj)
        this.setState({currentUser: userObj}, ()=> this.props.history.push("/home"))
        
      } else {
        window.alert("Wrong Username or Password, please try again.")
      }
    })
  }
  
  render(){
    console.log(this.state.currentUser)
    return (
      <>
        <NavBar currentUser={this.state.currentUser} />
        <Switch>
          {this.state.currentUser
          ? 
          <>
            <Route path="/" render={() => <MainContainer currentUser={this.state.currentUser} /> }/>
          </>
          :
          <>
            <Route exact path="/" render={() => <About /> } />
            <Route exact path="/login" render={() => <LoginForm loginHandler={this.loginHandler} />} />
            <Route path="/signup" render={() => <SignupForm/>} />
          </>
        }
        </Switch>
      </>
    );
  }
}
export default withRouter(App);


