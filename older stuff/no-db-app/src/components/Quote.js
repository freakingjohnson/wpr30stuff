import React, {Component} from 'react'
import axios from 'axios'

class Quote extends Component{
    constructor(){
        super();
        this.state={
            quote: {},
            author: {}
        }
    }
    componentWillMount(){
        axios.get('https://talaikis.com/api/quotes/random/').then(response => {
            this.setState({
                quote: response.data
            })
        })
    }
    render(){
        return(
        <div>
            <h2 className='Input'>Quote of the Minute:</h2>
            <h3>{this.state.quote.quote}</h3>
            <h3>- {this.state.quote.author}</h3>
        </div>
        )
    }
}
export default Quote