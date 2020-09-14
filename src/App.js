import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import LoginForm from './Components/LoginForm'
import SignupForm from './Components/SignupForm'
import MainContainer from './Containers/MainContainer'

function App() {
  return (
    <>
      <NavBar/>
      <LoginForm/>
      <SignupForm/>
      <MainContainer/>
    </>
  );
}

export default App;
