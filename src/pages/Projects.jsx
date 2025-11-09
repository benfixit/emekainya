import data from "../utils/projects.json";
import "./Projects.css";


const Projects = () => {    
    return (
        <section className="projects">
            {data.projects.map((item, index) => (
                <div key={index}>
                    <a href={`${item.link}`} target="_blank">{item.title}</a>
                    <p>{item.description}...</p>
                </div>
            ))}
        </section>
    );
}

export default Projects;