<div className='Input'>
        <div className='Input'>
          <h2>Income</h2>
          <input onChange={(e)=>this.handleChange(e.target.value)}
          type='number'
          name='income'
          placeholder='Enter income here'
          value={this.state.income}/>
          <button>Submit</button>
        </div>
        <div className='Input'>
          <h2>Bills</h2>
          <input type='number'/>
          <button>Submit</button>
        </div>
        <div className='Input'>
          <h2>Purchases</h2>
          <input type='number'/>
          <button>Submit</button>
        </div>
    </div>

    <div className='Output'>
      Current Balance: {updateBal()}
    </div>
        <p className="App-intro">
          
        </p>
        
        
        <footer className='Footer'>icon created by https://creativemarket.com/Becris</footer>
      </div>