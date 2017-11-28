import React, { Component } from 'react'
import moneyicon from './money.svg'
import './App.css'
import Quote from './components/Quote.js'
import Income from './components/Income.js'
import Bills from './components/Bills'
import Purchases from './components/Purchases'

function warning(num){
    if (num < 0){
      alert("STAAAHHP!")
    }
  }
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }
    this.updateBalance = this.updateBalance.bind(this)
  }

  updateBalance(num){
    this.setState({
      balance: this.state.balance + 1*num
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={moneyicon} className="App-logo" alt="logo" />
          <h1 className="App-title">Personal Budget App</h1>
        </header>
          <Income updateBalance={this.updateBalance}/> 
          <Bills updateBalance={this.updateBalance}/>
          <Purchases updateBalance={this.updateBalance}/>
          <h2 className='Input'>Balance: {this.state.balance}</h2>
          <h3>{warning(this.state.balance)}</h3>
          <Quote/>
        <footer className='Footer'>Icon made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" >CC 3.0 BY</a></footer>
      </div>
    )
  }
}

export default App;
