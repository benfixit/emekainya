import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Built with ❤️</p>
            <span>
                &copy; 2025.
            </span>
        </footer>
    );
}

export default Footer;