import "./footer.css"

export default function Footer() {
    return (
        <footer>
            <h2>My Learning Journal</h2>
            <p>Copyright ©{new Date().getFullYear()}</p>
        </footer>
    )
}