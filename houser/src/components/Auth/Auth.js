import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateUsername, updatePassword} from '../../ducks/reducer'
import logo from '../../assets/auth_logo.png'
import '../../css/components/Auth/Auth.css'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
         this.handleChange = this.handleChange.bind(this)
    }
    handleChange(prop,val){
        
        this.setState({[prop]: val})
    }
    render(){
        console.log('PROPS', this.props)
        const {username, password} = this.state
        const {updateUsername, updatePassword} = this.props

        return (
            <div className='AuthContainer white_bgc'>
                <img src={logo} alt="logo" className='AuthLogo'/>
                <span className='open-sans-bold AuthInputHeader'>Username</span>
                <input className='AuthInput dark_green_border' value = {username} onChange={(e)=> this.handleChange('username', e.target.value)}/>
                
                <span className='open-sans-bold AuthInputHeader'>Password</span>
                <input className='AuthInput dark_green_border'value = {password} type='password' onChange={(e)=> this.handleChange('password', e.target.value)}/>
                
                <div className='AuthButtonsContainer'>
                    <button className='AuthButtonLogin lightest_green_bgc open-sans-bold'>Login</button>
                    <button className='AuthButtonRegister dark_green_bgc open-sans-bold'>Register</button>
                </div>
            </div>
        )
    }
}

export default connect( state => state, {updatePassword, updateUsername})(Login)