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
        localStorage.setItem("userId", userObj.id)
        this.setState({currentUser: userObj}, ()=> this.props.history.push("/home"))
        
      } else {
        window.alert("Wrong Username or Password, please try again.")
      }
    })
  }
  
  signupHandler = (signupInfo) => {
    
      let configObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({user: signupInfo})
      }   

      
  fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(newUser => {
      if(newUser.id){          
      localStorage.setItem("userId", newUser.id)
      this.setState({currentUser: newUser}, ()=> this.props.history.push("/home"))
      } else {
        window.alert("Username taken. Please choose another name.")
      }
    }
    )

  }

      //passed down to Nav Bar - log out on click
  clearUser = () => {
    localStorage.removeItem("userId")
    this.setState({currentUser: null}, () => this.props.history.push("/"))
  }

  componentDidMount() {
    let currentUserId = localStorage.getItem("userId")
    //let intCurrentUserId = parseInt(currentUserId)

    if (currentUserId) {
      fetch(`http://localhost:3000/users/${currentUserId}`)
        .then(response => response.json())
        .then(userObj => this.setState({currentUser: userObj}))

    } else {
      this.props.history.push("/")
    }

  }

  createLetterHandler = (letterObj) => {
      console.log("POST this:", letterObj)
  }

  editLetterHandler = (letterObj) => {
    console.log("PATCH this:", letterObj)
}

  render(){
    return (
      <>
        <NavBar clearUser={this.clearUser} currentUser={this.state.currentUser} />
        <Switch>
          {this.state.currentUser
          ? 
          <>
            <Route path="/" render={() => <MainContainer createLetterHandler={this.createLetterHandler} editLetterHandler={this.editLetterHandler} currentUser={this.state.currentUser} /> }/>
          </>
          :
          <>
            <Route exact path="/" render={() => <About /> } />
            <Route exact path="/login" render={() => <LoginForm loginHandler={this.loginHandler} />} />
            <Route exact path="/signup" render={() => <SignupForm signupHandler={this.signupHandler } /> }/>
          </>
        }
        </Switch>
      </>
    );
  }
}
export default withRouter(App);




// componentDidMount() {
//   let currentUserId = localStorage.getItem("userid")
//   let intCurrentUserId = parseInt(currentUserId)

  
//   let configObj = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     },
//     body: JSON.stringify({user_id: intCurrentUserId})
//   }   

//   if (currentUserId) {
//     fetch("http://localhost:3000/profile", configObj)
//       .then(response => response.json())
//       .then(console.log("yay"))

//   } else {
//     this.props.history.push("/")
//   }

// }