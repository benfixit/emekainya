import { FaGlobe, FaGithub } from "react-icons/fa6"
import styles from "./Projects.module.css";
import projects from "../assets/projects.json";

const Projects = () => {
    return (
        <section className={styles.wrapper}>
            {projects.map(project => (
                <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span>
                        {project.webLink && <a href={project.webLink} target="_blank"><FaGlobe />&nbsp;Demo</a>}
                        <a href={project.githubLink} target="_blank"><FaGithub />&nbsp;Github</a>
                    </span>
                </div>
            ))}
        </section>
    );
}

export default Projects;