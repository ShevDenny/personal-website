import parkpic from '../photos/parkpic.jpeg';

export default function About() {

    return (
        <div className="about">
            <h1 className="about-title">About Shevon</h1>
            <div className="homepage">
                <img className="home-pic" src={parkpic} alt="profile-pic" loading="lazy"
                />
                <div className="home-info">
                    <p className="brief-about">Hello! My name is Shevon and I'm a full stack software engineer. My desire to learn and passion for problem solving and creating led me to pursue a career in software engineering. Now that I have made the decision to step into the tech world I plan to continue learning and building my skillset to eventually be in a position to help others like myself, maybe start my own business one day! 
                    <br></br>
                    <br></br>
                    When I'm not coding I'm working on my personal fashion brand, Vonshe, designing and constructing custom garments for women. It brings me joy bringing a vision to life and making women feel empowered and included in Fashion! I'm also a DIY enthusiast, I love to unwind by either reading a good book, or tending to my 50 plus houseplants! 
                    <br></br>
                    <br></br>
                    <i>Wanna work with me? Have any book recommendations? Or just want to chat? Feel free to email me shevoncdenny@gmail.com</i>
                    </p>
                </div>
            </div>

        </div>
    )
}