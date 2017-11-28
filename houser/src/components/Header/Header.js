import React, { Component } from 'react';
import headerLogo from '../../assets/header_logo.png';
import { Route, Link } from 'react-router-dom';
import '../../App.css';
class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <div className='Header-child'>
                    <div className='left-header'>
                        <span className='HeaderLogo'>
                            <img src={headerLogo} alt='Houser House' />
                        </span>
                        <span className='houser1'>Houser</span>
                        <span className='houser2'>Dashboard</span>
                    </div>
                    <span className='Logout'>
                        <Link to='/' style={{fontWeight: '700'}}>Logout</Link>
                    </span>
                </div>
            </div>
        )
    }
}
export default Header;