import React from 'react'
import {FaSearch} from 'react-icons/fa'
export default function Header() {
    return (
        <nav>
            <div className='linelogo'>
            <div className="logo">Rayes.</div>
            <ul>
                <li>Home</li>
                <li>Our Products</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
            <div className="search">
                
                <div className="fa fa-shopping-basket">
                import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
                    <FaSearch/>
                </div>
            </div>
           </div>
        </nav>
    )
}