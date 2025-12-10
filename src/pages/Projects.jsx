import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa6"
import styles from "./Projects.module.css"

const Projects = () => {
    return (
        <main className={styles.main}>
            <nav className={styles.nav}>
                <h1>
                    <a href="/">CI</a>
                </h1>
                <ul>
                    <a href="/projects">Projects</a>
                    <a href="https://blog.emekainya.com" target="blank">Blog</a>
                </ul>
            </nav>
            <section className={styles.wrapper}>
                
            </section>
            <footer className={styles.footer}>
                <p>Built with ❤️</p>
                <span>
                    &copy; 2025.
                </span>
            </footer>
        </main>
    );
}

export default Projects;