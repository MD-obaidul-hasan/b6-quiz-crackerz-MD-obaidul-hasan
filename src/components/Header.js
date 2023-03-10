import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../asset/logo.png'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar bg-primary text-base-100 sticky top-0 z-50">
            {/* for mobile  */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        <li><Link to='/statices'>Statices</Link></li>
                    </ul>
                </div>
                <img onClick={() => navigate('/')} className='w-32 cursor-pointer' src={logo} alt="" />
            </div>

            {/* for dasktop  */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/statices'>Statices</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;