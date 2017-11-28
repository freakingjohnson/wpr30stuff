import React, {Component} from 'react'

class Income extends Component{
    constructor(){
      super()
      this.state={
        income: ''
      }
    }
    handleChange(value){
      this.setState({income: value})
    }

    render(){
        return(
            <div className='Input'>
                <h2>Income</h2>
                <input onChange={(e)=>this.handleChange(e.target.value)}
                    type='number'
                    name='income'
                    placeholder='Enter income here'
                    value={this.state.income}/>
                <button onClick={()=>this.props.updateBalance(this.state.income)}>Submit</button>
            </div>
        )
    }
}

export default Income