import React, {Component} from 'react'

class Bills extends Component{
    constructor(){
      super()
      this.state={
        bills: ''
      }
    }
    handleChange(value){
      this.setState({bills: value})
    }

    render(){
        return(
            <div className='Input'>
                <h2>Bills</h2>
                <input onChange={(e)=>this.handleChange(e.target.value)}
                    type='number'
                    name='bills'
                    placeholder='Enter bills here'
                    value={this.state.bills}/>
                    <button onClick={()=>this.props.updateBalance(this.state.bills*-1)}>Submit</button>
        </div>
        )
    }
}

export default Bills