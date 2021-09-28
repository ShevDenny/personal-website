import artsy from './photos/artsy.png';
import hairSuit from './photos/hairSuit.png';
import letshang from './photos/letshang.png';


export default function Portfolio(){
    
    return (
        <div className="portfolio">

            <p className="portfolio-para" >Creating has always been somethingI've enjoyed doing. To see an idea come to life is fulfulling and exciting! Here are a few project that I've created and take pride in. </p>

            <div className="projects">

                <h3 className="project-title">HairSuit</h3>
                <img src={hairSuit} width="600"/>
                <p>Your hairstlye can be used as a form of expression. I love experimenting with differnt hairstyles that will match my mood at the moment or even an outfit. So if you're like me and like to experiment then you know the struggles of finding a hair salon that suits you and your hair needs. Thats where HairSuit comes in. As a user you'll be able to do the following:
                    - Sign in or create an account using local storage and JWT tokens to store user data.
                    - Search for a salon based on specialty or salon name ex. "curls", "The Salon by Ursula Stephen"
                    - View Salon information such as address, customer reviews, services and brief description of salon.
                    - Create/delete an appointment
                    - Create/delete a review with a photo using active storage
                </p>
                <a href="https://github.com/ShevDenny/Hairsuit_Frontend">Github Frontend Repo</a>
                <a href="https://github.com/ShevDenny/Hairsuit_backend"> GitHub Backend Repo</a>

            </div>

            <div className="projects">

                <h3 className="project-title">Let's Hang</h3>
                <img src={letshang} width="600"/>
                <p>This pandemic has been way too long and we miss our friends! After not seeing one another for so long, "Let's Hang!". The user will be able to do the following:
                    - Create an account or sign in with an existing account uing localStorage to store user data.
                    - Search for a type of hang in city of choice. ex. "Cafe" in "Manhattan"
                    - Plan a hangout with friends or cancel a hangout. 
                    - Favorite a spot to return to later 
                </p>
                <a href="https://github.com/ShevDenny/Lets-Hang">Github Repo</a>

            </div>

            <div className="projects">

                <h3 className="project-title">Artsy</h3>
                <img src={artsy} width="600" />
                <p>Project Description</p>
                <a href="https://github.com/jaysongraphics/artsy-front-end">Github Frontend Repo</a>

            </div>
        </div>
    )
}