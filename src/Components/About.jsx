import aboutme from '../photos/aboutme.jpeg';

export default function About() {

    return (
        <div className="about">
            <h1 className="about-title">About Shevon</h1>

            <img className="about-pic" src={aboutme} alt="profilepic" width="400" />
            <p className="about-me">INSERT ABOUT ME</p>
        </div>
    )
}