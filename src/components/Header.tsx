import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import './Header.scss'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contextProvider/CartProvider";

const Header = () => {

    const { cartCount } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <header className="header">
            <Link className="title" to="/"><h1><strong>Ai.</strong>Commerce</h1></Link>
            <div className='menu'>
                <FaUserCircle onClick={() => { navigate("/user") }} className='icon' />
                <div className="cart">
                    <FaShoppingCart className="icon" />
                    <p className="cartCount">{cartCount}</p>
                </div>
            </div>
        </header>
    )
}

export default Header