import "./Projects.css";

const items = [
    {
        id: 1,
        title: "Markdown Editor",
        description: "Markdown editor with preview using React JS",
        link: "https://github.com/benfixit/markdown-editor"
    },
    {
        id: 2,
        title: "Chat app",
        description: "A chat app built using React, Express and Socket.io",
        link: "https://github.com/benfixit/chat-app"
    },
    {
        id: 3,
        title: "Igbo names",
        description: "A repository for Igbo names",
        link: "https://github.com/benfixit/igbonames"
    }
];
const Projects = () => {
    return (
        <section className="projects">
            {items.map((item, index) => (
                <div key={index}>
                    <a href={`${item.link}`}>{item.title}</a>
                    <p>{item.description}...</p>
                </div>
            ))}
        </section>
    );
}

export default Projects;