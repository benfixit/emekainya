import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <h1>
                <a href="/">CI</a>
            </h1>
            <ul>
                <a href="/projects">Projects</a>
                <a href="https://blog.emekainya.com" target="blank">Blog</a>
            </ul>
        </nav>
    );
}

export default Nav;