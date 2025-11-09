import { FaGithub, FaGlobe } from "react-icons/fa6"
import data from "../utils/projects.json";
import "./Projects.css";


const Projects = () => {    
    return (
        <section className="projects">
            {data.projects.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}...</p>
                    <ul>
                        {item.webLink && <li><a href={`${item.webLink}`} target="_blank"><FaGlobe /></a></li>}
                        <li><a href={`${item.githubLink}`} target="_blank"><FaGithub /></a></li>
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Projects;