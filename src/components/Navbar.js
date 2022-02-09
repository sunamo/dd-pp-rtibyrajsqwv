import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const navStyle = { height: "5vh" }

    return (
        <div className='containerFullWidth'>
            <nav className="nav-wrapper" className="white">
                <div className="container">
                    <Link to="/" className="brand-logo black-text">Random eshop</Link>

                    <ul className="right">
                        <li><Link to="/cart"><i className="material-icons blue-text">shopping_basket</i></Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;