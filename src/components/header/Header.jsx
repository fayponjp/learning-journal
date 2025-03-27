import './header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <img src="logo.svg" alt="logo depicting a chat bubble" />
                <span>My learning journal</span>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Me</a></li>
                </ul>
            </nav>
        </header>
    )
}