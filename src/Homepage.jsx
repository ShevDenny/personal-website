import profilepic from './photos/profilepic.jpeg';
export default function Homepage() {

    return (
        <div className="homepage">
            <div className="homephoto-div">
                <img className="home-pic" src={profilepic} alt="profile-pic" width="600" />

            </div>
            <div className="home-info">
                <p className="brief">I'm a Full-Stack Web Developer and DIY enthusiast who's passionate about learning and growing everyday. Exerienced with React, Ruby, Ruby on Rails, JavaScript, HTML, CSS, SQLite, Posgresql. 
                </p>
            </div>
        </div>
    )

}