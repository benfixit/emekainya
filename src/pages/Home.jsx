import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from "react-icons/fa6"
import styles from "./Home.module.css"

const Home = () => {
    return (
        <section className={styles.wrapper}>
            <h1>Hey, I'm Chuks.</h1>
            <section>
                <div></div>
                <div>
                    <p>
                        A software engineer specializing in building and scaling robust enterprise and web applications.
                    </p>
                    <p>
                        I have proven expertise in architecting complex systems, optimizing data structures and algorithms, and driving engineering excellence as an active StackOverflow contributor.
                    </p>
                    <p>
                        Over the past 9 years, I've shipped products across <strong>finance</strong>, <strong>real estate</strong>, and <strong>hospitality</strong>, working with technologies like Python, PHP (Laravel, Symfony), JavaScript (TypeScript, React, Node.js), MySQL, Docker, Redis, and Kubernetes.
                    </p>
                    <ul>
                        <a href="https://github.com/benfixit" target="_blank"><FaGithub /> &nbsp; Github</a>
                        <a href="https://www.linkedin.com/in/chukwuemeka-inya" target="_blank"><FaLinkedin /> &nbsp; Linkedin</a>
                        <a href="https://x.com/inyaemeka" target="_blank"><FaTwitter /> &nbsp; Twitter</a>
                        <a href="resume.pdf" download={"chukwuemeka"}><FaDownload /> &nbsp; Resume</a>
                    </ul>
                    <div>
                        <a href="mailto:inyachukwuemeka1@gmail.com">Let's work together</a>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;