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
  
  //Log out - passed to Nav Bar
  clearUser = () => {
    localStorage.removeItem("userId")
    this.setState({currentUser: null}, () => this.props.history.push("/"))
  }

  //Log in and signup
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
      })
  }

  // Makes sure User persists on a refresh - mimics Auth
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

  // Letter Create/Edit/Delete Handlers
  createLetterHandler = (letterObj, toEdit) => {
    //toEdit will be null here sine it only exists if we're editing a letter
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(letterObj)
    }

    fetch("http://localhost:3000/letters/", configObj)
      .then(response => response.json())
      .then(newLetterObj => {
        this.setState({...this.state, currentUser: {...this.state.currentUser, letters: [...this.state.currentUser.letters, newLetterObj ]   } }, ()=> this.props.history.push("/letters") )

      })
  }

  editLetterHandler = (letterObj, toEdit) => {
    
    const configObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(letterObj)
    }

    fetch(`http://localhost:3000/letters/${toEdit.id}`, configObj)
      .then(response => response.json())
      .then(editedLetter => {
        let newLetterArray = [...this.state.currentUser.letters]
        let letterToEdit = newLetterArray.find(letterObject => letterObject.id === editedLetter.id)
        letterToEdit.letter_title = editedLetter.letter_title
        letterToEdit.recipient_name = editedLetter.recipient_name
        letterToEdit.recipient_email = editedLetter.recipient_email
        letterToEdit.letter_text = editedLetter.letter_text
        letterToEdit.signoff = editedLetter.signoff

        this.setState({...this.state, currentUser: {...this.state.currentUser, letters: newLetterArray } }, ()=> this.props.history.push("/letters") )
        })
    }

    deleteLetterHandler = (letterObj) => {
      
      const configObj = {
        method: 'DELETE'
      }

        fetch(`http://localhost:3000/letters/${letterObj.id}`, configObj)
          .then(()=> {
            let newLetterArray = [...this.state.currentUser.letters]
            let updatedLetterArray = newLetterArray.filter(letterObject => letterObject.id !== letterObj.id)
            this.setState({...this.state, currentUser: {...this.state.currentUser, letters: updatedLetterArray } }, ()=> this.props.history.push("/letters") )
          })
    }

    //Executor Create/Edit/Delete Handlers
    createExecutorHandler = (executorObj, toEdit) => {
      //toEdit will be null here sine it only exists if we're editing a letter
      const configObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(executorObj)
      }
  
      fetch("http://localhost:3000/executors/", configObj)
        .then(response => response.json())
        .then(newExecutorObj => {
          this.setState({...this.state, currentUser: {...this.state.currentUser, executors: [...this.state.currentUser.executors, newExecutorObj ] } }, ()=> this.props.history.push("/executors") )
  
        })
    }

    editExecutorHandler = (executorObj, toEdit) => {
    
      const configObj = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(executorObj)
      }
  
      fetch(`http://localhost:3000/executors/${toEdit.id}`, configObj)
        .then(response => response.json())
        .then(editedExecutor => {
          let newExecutorArray = [...this.state.currentUser.executors]
          let executorToEdit = newExecutorArray.find(executorObject => executorObject.id === editedExecutor.id)
          executorToEdit.executor_name = editedExecutor.executor_name
          executorToEdit.executor_email = editedExecutor.executor_email
          executorToEdit.instructions = editedExecutor.instructions
         
          this.setState({...this.state, currentUser: {...this.state.currentUser, executors: newExecutorArray } }, ()=> this.props.history.push("/executors") )
          })
      }

      deleteExecutorHandler = (executorObj) => {
      
        const configObj = {
          method: 'DELETE'
        }
  
          fetch(`http://localhost:3000/executors/${executorObj.id}`, configObj)
            .then(()=> {
              let newExecutorArray = [...this.state.currentUser.executors]
              let updatedExecutorArray = newExecutorArray.filter(executorObject => executorObject.id !== executorObj.id)
              this.setState({...this.state, currentUser: {...this.state.currentUser, executors: updatedExecutorArray } }, ()=> this.props.history.push("/executors") )
            })
      }

      exportLetters = (userObj) => {
        this.setState({...this.state, currentUser: {...this.state.currentUser, letter_status: true} })
        console.log(`big scary export to pdfs of all of ${userObj.username}'s letters`)

        //ultimately, I'll need to loop through all letters and send a post for each one * # of executors, but for now just hardcoding firts letter + executor

        let configObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            "letter_title": this.state.currentUser.letters[0].letter_title,
            "recipient_name": this.state.currentUser.letters[0].recipient_name,
            "recipient_email": this.state.currentUser.letters[0].recipient_email,
            "username" : this.state.currentUser.username,
            "letter_text" : this.state.currentUser.letters[0].letter_text,
            "signoff" : this.state.currentUser.letters[0].signoff,
            "executor_name": this.state.currentUser.executors[0].executor_name,
            "executor_email": this.state.currentUser.executors[0].executor_email,
            "instructions" : this.state.currentUser.executors[0].instructions
          })
        }

        fetch("https://www.webmerge.me/merge/659863/nw7yvx?test=1", configObj)
        .then(console.log)
          // .then(response => response.json())
        //Needs to: 1. set state of letter_status on user to true ( which will remove the button that triggers function call) and persist to DB - eventually you'll be able to undo it and send updated letters again
        // 2. Send POST req Formstack API for each letter with variables from letter model and user model
        // 3. Eventually also send another one with variables from executor model - with instructions
      }

    render(){
      // this.state.currentUser ? console.log(this.state.currentUser.executors[0]) :console.log("no user")
      //console.log(this.state.currentUser)
      //console.log(this.state.currentUser.letters)
      //console.log(this.props.currentUser.letters)
      return (
        <>
          <NavBar clearUser={this.clearUser} currentUser={this.state.currentUser} />
          <Switch>
            {this.state.currentUser
            ? 
            <>
              <Route path="/" render={() => <MainContainer currentUser={this.state.currentUser} exportLetters={this.exportLetters} createLetterHandler={this.createLetterHandler} editLetterHandler={this.editLetterHandler}  deleteLetterHandler={this.deleteLetterHandler} createExecutorHandler={this.createExecutorHandler} editExecutorHandler={this.editExecutorHandler} deleteExecutorHandler={this.deleteExecutorHandler} /> }/>
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

