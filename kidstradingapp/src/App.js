import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import { FIREBASE_CONFIG } from "./Components/Firebase/const.js"; 

class App extends Component {

  constructor(props){
      super(props);
      this.state = {buttonState: 0};
      firebase.initializeApp(FIREBASE_CONFIG);
    }

    render() {
    
    return (
      
      <div className="App">
        <header className="App-header">
        <button className="ui button" onClick={() => {
          this.setState({buttonState:this.state.buttonState + 1});
          var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          }}button class="button3">Sign In With Google</button>
        <button class="button2">Trade Now</button>
       
          <ul>
      	{/*<li><img src={imageFour} width="1440" height="900" /></li>*/}
      </ul>
         
    
        
 
        
  
  

  
        </header>
      </div>
    );
  }
  
}

export default App;
