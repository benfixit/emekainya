import { NavLink } from "react-router";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <h1>
                <a href="/">CI</a>
            </h1>
            <ul>
                <NavLink to={"/projects"}>Projects</NavLink>
                <a href="https://blog.emekainya.com" target="_blank">Blog</a>
            </ul>
        </nav>
    );
}

export default Nav;