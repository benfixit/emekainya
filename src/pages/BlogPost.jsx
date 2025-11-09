import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Markdown from "react-markdown";
import frontmatter from "frontmatter";
import "./Blog.css";


const BlogPost = () => {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const { slug } = useParams();

    useEffect(() => {
        const fetchMarkdownFile = async () => {
            const file = await import(`../content/blog/${slug}.md`);

            const res = await fetch(file.default);
            const body = await res.text();

            const { data, content } = frontmatter(body);

            setTitle(data.title);
            setContent(content);
        }

        fetchMarkdownFile();
    }, []);

    return (
        <div className="blogPost">
            <h2>{title}</h2>
            <Markdown>{content}</Markdown>
        </div>
    );
}

export default BlogPost;