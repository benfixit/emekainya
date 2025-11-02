import { NavLink } from "react-router";
import "./Nav.css";

const Nav = () => {
    return (
        <nav>
            <h1>
                <NavLink to={"/"}>Chukwuemeka Inya</NavLink>
            </h1>
            <ul>
                <NavLink to={"/blog"}>Blog</NavLink>
                <NavLink to={"/projects"}>Projects</NavLink>
                <NavLink to={"/resume"}>Resume</NavLink>
            </ul>
        </nav>
    );
}

export default Nav;