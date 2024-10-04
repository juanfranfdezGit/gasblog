import './navbar.css'

function Navbar() {
    
    return (
        <nav className='flex navbar'>
            <ul className='flex'>
                <li><a href="#Novedades">Novedades</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Contact">Contacto</a></li>
            </ul>
        </nav>
    )

}

export default Navbar;