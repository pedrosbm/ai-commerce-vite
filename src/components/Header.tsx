import { FaUserCircle } from "react-icons/fa";

import './Header.scss'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link className="title" to="/"><h1><strong>Ai.</strong>Commerce</h1></Link>
            <div className='menu'>
                <FaUserCircle className='userIcon'/>
            </div>
        </header>
    )
}

export default Header