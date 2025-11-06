import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from 'rehype-raw'
import remarkFrontmatter from "remark-frontmatter";

import "./Resume.css";

const Resume = () => {
    const [content, setContent] = useState("");
    useEffect(() => {
        const fetchMarkdownFile = async () => {
            const resumeFile = await import("../content/resume/index.md");
            const response = await fetch(resumeFile.default);
            
            const data = await response.text();

            console.log("Data ::: ", data);
            
            setContent(data);
        }

        fetchMarkdownFile();
    }, []);

    return (
        <div className="wrapper">
            <Markdown rehypePlugins={[rehypeRaw, remarkFrontmatter]}>{content}</Markdown>
        </div>
    );
}

export default Resume;