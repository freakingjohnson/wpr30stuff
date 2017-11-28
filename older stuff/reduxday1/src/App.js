import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        text: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
      this.setState({
        text: e.target.value
      })
    }
    handleClick(){
      
    }
  render() {
    const partyList = this.props.list.map((person,index) => {
      return <p key = {index}>{person}</p>
    })
    return (
      <div className="App">
        <h1>Party List</h1>
        <input value = {this.state.text} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>add guest</button>
        {partyList}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log('Store state', state)
  return {
    list: state.partyList
  }
}

var decorator = connect(mapStateToProps)
export default decorator(App)

// export default connect(mapStateToProps)(App)