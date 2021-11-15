import artsy from './photos/artsy.png';
import hairSuit from './photos/hairSuit.png';
import letshang from './photos/letshang.png';


export default function Portfolio(){
    
    return (
        <div className="portfolio">

            <div className="projects">

                <h3 className="project-title">HairSuit</h3>
                <div className="project-demo">
                    <iframe className="project" src="https://www.loom.com/embed/0d1d5dfaaf284fbcbf726df9f89d7607" width="540" height="450"></iframe>
                </div>
                <p>Your hairstlye can be used as a form of expression. I love experimenting with different hairstyles that will match my mood at the moment or even an outfit. So if you're like me and like to experiment then you know the struggles of finding a hair salon that suits you and your hair needs. Thats where HairSuit comes in. As a user you'll be able to do the following:
                    - Sign in or create an account using local storage and JWT tokens to store user data.
                    - Search for a salon based on specialty or salon name ex. "curls", "The Salon by Ursula Stephen"
                    - View Salon information such as address, customer reviews, services and brief description of salon.
                    - Create/delete an appointment
                    - Create/delete a review with a photo using active storage
                </p>
                
            </div>

            <div className="projects">

                <h3 className="project-title">Let's Hang</h3>
                <div className="project-demo">
                    <iframe className="project" src="https://www.loom.com/embed/76db4ffd392a48409c63771d56e724c9" width="540" height="450"></iframe>
                </div>
                <p>This pandemic has been way too long and we miss our friends! After not seeing one another for so long, "Let's Hang!". The user will be able to do the following:
                    - Create an account or sign in with an existing account uing localStorage to store user data.
                    - Search for a type of hang in city of choice. ex. "Cafe" in "Manhattan"
                    - Plan a hangout with friends or cancel a hangout. 
                    - Favorite a spot to return to later 
                </p>

            </div>

            <div className="projects">

                <h3 className="project-title">Artsy</h3>
                <p>Project Description</p>
            
                <div className="project-demo">
                    <iframe className="project" src="https://www.loom.com/embed/e23d78807a7743829b28410f8310471b" width="540" height="450"></iframe>
                </div>
            </div>
        </div>
    )
}