import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>
                    <strong>Email</strong><br />
                    <span>Contact me at: inyachukwuemeka1{/*  Comment */}@gmail.com</span>
                </li>
                <li>
                    <strong>Github</strong><br />
                    <a href="https://github.com/benfixit" target="_blank">https://github.com/benfixit</a>
                </li>
                <li>
                    <strong>Linkedin</strong><br />
                    <a href="https://www.linkedin.com/in/chukwuemeka-inya" target="_blank">https://www.linkedin.com/in/chukwuemeka-inya</a>
                </li>
                <li>
                    &copy; Chukwuemeka Inya, 2025.
                </li>
            </ul>
        </footer>
    );
}

export default Footer;