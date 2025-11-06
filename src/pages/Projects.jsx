import "./Projects.css";

const items = [
    {
        id: 1,
        title: "First article",
        content: "Hello World content"
    },
    {
        id: 2,
        title: "Second article",
        content: "Hello World content"
    },
    {
        id: 3,
        title: "Third article",
        content: "Hello World content"
    },
    {
        id: 4,
        title: "Fourth article",
        content: "Hello World content"
    }
];
const Projects = () => {
    return (
        <section className="projects">
            {items.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </div>
            ))}
        </section>
    );
}

export default Projects;