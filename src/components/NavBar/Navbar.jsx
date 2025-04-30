import './navbar.css'
import { CiGrid41 } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src='/logosolo.webp' alt="afriano logo" className="logo-afriano" />
            <CiGrid41 className="inline sm:hidden text-3xl" />
            <ul className="nav-menu">
                <a><li>Home</li></a>
                <a href="#portfolio"><li>Portfolio</li></a>
                <a href="#about"><li>About Me</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </div>
    )
}

export default Navbar