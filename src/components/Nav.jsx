import { NavLink } from "react-router";
import "./Nav.css";

const Nav = () => {
    return (
        <nav>
            <h1>
                <span className="ball"></span>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to={"/"}>Chukwuemeka Inya</NavLink>&nbsp;&nbsp;<span className="divider">|</span>&nbsp;&nbsp;
                <span className="title">Software Engineer</span>
            </h1>
            <ul>
                <a href="https://blog.emekainya.com" target="blank">Blog</a>
                <NavLink to={"/projects"}>Projects</NavLink>
                <NavLink to={"/resume"}>Resume</NavLink>
            </ul>
        </nav>
    );
}

export default Nav;