import profilepic from './photos/profilepic.jpeg';
export default function Homepage() {

    return (
        <div className="homepage">
            <img src={profilepic} alt="profile-pic" width="600" />
            <p>I'm a Full-Stack Web Developer who's passionate about learning and growing everyday. Exerienced with React, Ruby, Ruby on Rails, JavaScript, HTML, CSS, SQLite, Posgresql. </p>
        </div>
    )

}