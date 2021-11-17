import aboutme from '../photos/aboutme.jpeg';

export default function About() {

    return (
        <div className="about">
            <h1 className="about-title">About Shevon</h1>

            <img className="about-pic" src={aboutme} alt="profilepic" width="400" />
            <p className="about-me">Hi! My name is Shevon and I'm a full stack software engineer. My desire to learn and passion for problem solving led me to software engineering. I hope to create apps that help to make the lives of people easier. Ever since i was young I've enjoyed creating, whether it was a crochet class, woodwork class which led me to teach myself how to sew. I enjoy being hands on and tackling any task thrown my way.</p>
        </div>
    )
}