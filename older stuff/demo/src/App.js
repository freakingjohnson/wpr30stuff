import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state={
      people: [{name:'Rick'}]
    }
  }
  componentDidMount(){
    //where we make http request
    //make an http get request to SWAPI for people data
    //once the datta returns, we will setState to update state with the new data
    //1-makes the request
    //2-return promise
    let promise = axios.get('https://swapi.co/api/people/')
    //promise is an object that tells JS to chill out
    //makes request asynchronous
      promise.then(response=>{
        this.setState({
          people: response.data.results
      })
    })  // axios.put()
    // axios.post()
    // axios.delete()
  }

  render() {
    let people = this.state.people.map((element,index)=>{
      return (
        <h3 key={index}>{element.name}</h3>//key should be in outermost element
      )
    })

    return (
      <div className="App">
        <h1>PEEPS</h1>
        {people}
      </div>
    );
  }
}

export default App;
