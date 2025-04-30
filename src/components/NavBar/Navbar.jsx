import './navbar.css'
import { CiGrid41 } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="navbar">
            <img src='/logosolo.webp' alt="afriano logo" className="logo-afriano" />
            <CiGrid41 className="inline sm:hidden text-3xl" />
            <ul className="nav-menu">
                <li><a href='#'>Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar