import './header.css'
import logo from '/logo.svg'
import { NavLink } from 'react-router'
export default function Header() {
    const activeStyles = {

        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header className='nav-header container'>
            <img src={logo} alt="logo depicting a chat bubble" />
            <span>My Learning Journal</span>
            <nav>
                <NavLink 
                    to='/'
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>
                <NavLink 
                    to='/about'
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
            </nav>
        </header>
    )
}