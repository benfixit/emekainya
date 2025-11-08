import { useEffect, useState } from "react";
import { Link } from "react-router";
import frontmatter from "frontmatter";
import { getNWords } from "../utils/string";
import "./Blog.css";


const Blog = () => {
    const [files, setFiles] = useState([]);
    const [frontmatters, setFrontmatters] = useState([]);

    useEffect(() => {
        const fetchFiles = async () => {
            const blogFiles = await import("../utils/blogFiles.json");

            setFiles(blogFiles.default);
        }

        fetchFiles();

        const fetchFrontmatters = async () => {
            const requests = files.map(async file => {
                const imp = await import(`../content/blog/${file}.md`);

                const res = await fetch(imp.default);
                const body = await res.text();

                const { data, content } = frontmatter(body);
                const description = getNWords(content, 40);
                
                return {data, description, path: file};
            });

            const frontmatters = await Promise.all(requests);

            setFrontmatters(frontmatters);
        }

        fetchFrontmatters();
    }, [files]);

    return (
        <section className="blogs">
            {frontmatters.map((item, index) => (
                <div key={index}>
                    <Link to={`/blog/${item.path}`}>{item.data.title}</Link>
                    <p>{item.description}...</p>
                </div>
            ))}
        </section>
    );
}

export default Blog;