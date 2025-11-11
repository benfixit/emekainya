import Thumbnail from "../assets/emeka.png";
import "./Banner.css";

const Banner = () => {
    return (
        <section>
            <img src={Thumbnail} alt="Chukwuemeka Inya" width="300" height="350" />
            <div>
                <h1>Chukwuemeka Inya</h1>
                <p>
                    Hey, I'm Chuks. Software Engineer specializing in building and scaling robust enterprise and web applications across the JavaScript, Python, and PHP ecosystems. Proven expertise in architecting complex systems, and driving engineering excellence as an active StackOverflow contributor.
                </p>
            </div>
        </section>
    );
}

export default Banner;