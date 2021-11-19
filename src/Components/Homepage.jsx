import Projects from './Projects';
import headshot from '../photos/headshot.jpeg';

export default function Homepage() {

    return (
        <div>
            <div className="homepage">
                <img className="home-pic" src={headshot} alt="profile-pic" loading="lazy"
                />
                <div className="home-info">
                    <p className="brief-about">Hi and welcome! I'm a Full-Stack software engineer exerienced with JavaScript, React, Ruby, Ruby on Rails, Python, Node.js, HTML, CSS, SQLite and Postgresql. 
                    </p>
                </div>
            </div>
            <div className="skills">
                <h3 className="skills-title">My Top Skills</h3>
                <div className="skills-wrapper"> 
                    <img 
                        className="skill-icon"
                        loading="lazy" 
                        src="https://img.icons8.com/color/30/000000/javascript--v1.png" 
                        alt="javaScript" 
                    />
                    <img 
                        className="skill-icon" 
                        loading="lazy" 
                        src="https://img.icons8.com/office/30/000000/react.png"
                        alt="React" 
                    />
                    <img 
                        className="skill-icon"
                        loading="lazy" 
                        src="https://img.icons8.com/color/30/000000/ruby-programming-language.png"
                        alt="ruby" 
                    />
                    <img 
                        className="skill-icon"
                        loading="lazy" 
                        src="https://img.icons8.com/color/30/000000/html-5--v1.png"
                        alt="HTML"
                    />
                     <img 
                        className="skill-icon"
                        loading="lazy"
                        src="https://img.icons8.com/color/30/000000/css3.png"
                        alt="css3" 
                    />
                    <img 
                        className="skill-icon"
                        loading="lazy"
                        src="https://img.icons8.com/color/30/000000/postgreesql.png"
                        alt="postgreesql" 
                     />
                </div>
            </div>
            <Projects />

        </div>
        
    )

}