import Projects from './Projects'
import Contact from './Contact'
import aboutme from './photos/aboutme.jpeg';

export default function Homepage() {

    return (
        <div>
            <div className="homepage">
                <img className="home-pic" src={aboutme} alt="profile-pic" loading="lazy"
                />
                <div className="home-info">
                    <h3 className="home-about">About Me</h3>
                    <p className="brief-about">Hi! I'm a Full-Stack Web Developer exerienced with JavaScript, React, Ruby, Ruby on Rails, HTML, CSS, SQLite and Postgresql. 
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
            <Contact />
        </div>
        
    )

}