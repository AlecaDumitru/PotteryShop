import './styles/Navbar.css'


const Navbar = () => {
    return(
        <nav className="navbar-container">
            <a href="/">
                Home
            </a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/products">Products</a>
            <a href="/sign-up">Sign up</a>
            <a href="/register">Sign in</a>
        </nav>
    )
}

export default Navbar