import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import imageOne from "./resources/Home.jpg";

class App extends Component {
  constructor(props){
      super(props);
      this.state={buttonState:0};
    }

    render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <button class="ui button" onClick={() => {
          this.setState({buttonState:this.state.buttonState++});
        }}>Get Started</button>
          
          {this.state.buttonState  >1 ?
        (this.state.buttonState == 1 ? <img resource= "http://www3.pictures.livingly.com/gi/Misha+Bender+jU0rbv8NDyGm.jpg" /> : <img resource= "imageTwo" />)  
         
        
        :
        
        <img src= "/Users/student/Desktop/Kid-s-Trading-App/kidstradingapp/src/resources/Home.jpg" />
        
        }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           
          </a>
        </header>
      </div>
    );
  }
}

export default App;
