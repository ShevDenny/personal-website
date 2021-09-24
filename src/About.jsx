import profilepic from './photos/profilepic.jpeg';

export default function About() {

    return (
        <div className="about-me">
            <h1 className="title">About Shevon</h1>
            <img src={profilepic} alt="profilepic" width="700" />
            {/* <p>From the Amazon jungle of Guyana to the concrete jungle.</p> */}
        </div>
    )
}