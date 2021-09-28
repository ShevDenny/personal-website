import aboutme from './photos/aboutme.jpeg';

export default function About() {

    return (
        <div className="about">
            <h1 className="title">About Shevon</h1>

            <img className="about-pic" src={aboutme} alt="profilepic" width="600" />
            <p className="about-me">From the Amazon jungle of Guyana to the concrete jungle. When I'm not coding I enjoy spending my time tending to my 30 plus house plants, anything nature related excites my soul! I hold my family very closely to my heart and they've been a huge motivation for me along my coding and life journey. I love being hands on. trying new foods or  going on wild adventures. I also spend my time building my brand Vonshe, a clothing brand for women of all shapes and sizes. Being a black woman I aim for inclusivity in every aspect of my life. coding means so much to me because I was able to commit to something and accomplish that. As challenging as it is, I was able to push through. Now that I'm coding I hope I'm able to introduce the skill to black and brown people in neighborhoods where it isn't common</p>
        </div>
    )
}