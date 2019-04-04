import React, { Component } from 'react';
import './App.css';
import data from './Components/data'
import WhitBox from './Components/WhiteBox'
import Buttons from './Components/Buttons'

class App extends Component {
  
    state = {
      count: 0,
    }
    increaseCount= () =>{
      this.setState({count: this.state.count + 1})
    }
    decreaseCount= () =>{
      this.setState({count: this.state.count - 1})
    }
  
  render() {
    return (
      <div className="App">
       <header className= 'header'>Home</header>
       <div className= 'body'>
        <WhitBox data = {data[this.state.count]}/>
      <Buttons increaseCount = {this.increaseCount} decreaseCount={this.decreaseCount}/>
      </div>
      

      </div>
      
    );
  }
}

export default App;
