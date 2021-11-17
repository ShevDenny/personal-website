import SimpleImageSlider from "react-simple-image-slider";
import artsy from "../photos/artsy.png"
import hairSuit from '../photos/hairSuit.png'
import letshang from '../photos/letshang.png'

const images = [
  { url: artsy },
  { url: hairSuit },
  { url: letshang },
];

export default function Projects() {

    return (
        <div className="projects-slide">
            <h3 className="slide-title">Projects</h3>
            <div className="slideshow">
                <SimpleImageSlider
                    width={500}
                    height={250}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
            <div className="more-projects">
                <a href="/portfolio">See more projects</a>
            </div>
        </div>
    )
}