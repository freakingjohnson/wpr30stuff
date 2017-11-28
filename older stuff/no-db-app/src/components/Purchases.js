import React, {Component} from 'react'



class Purchases extends Component{
    constructor(){
      super()
      this.state={
        purchases: ''
      }
    }
handleChange(value){
      this.setState({purchases: value})
}

render(){
    return(
        <div className='Input'>
            <h2>Purchases</h2>
            <input onChange={(e)=>this.handleChange(e.target.value)}
                type='number'
                name='purchases'
                placeholder='Enter purchases here'
                value={this.state.purchases}/>
            <button onClick={()=>this.props.updateBalance(this.state.purchases*-1)}>Submit</button>
        </div>
        )
    }
}

export default Purchases