import './navbar.css'
import Logo from '../assets/logo.webp'

function Navbar() {
    
    return (
        <nav className='flex navbar'>
            <img src={Logo} alt="Gas blog"></img>
            <ul className='flex'>
                <li><a href="#Novedades">Novedades</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Contact">Contacto</a></li>
            </ul>
        </nav>
    )

}

export default Navbar;