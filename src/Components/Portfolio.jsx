export default function Portfolio(){
    
    return (
        <div className="portfolio">

            <div className="projects">

                <h3 className="project-title">HairSuit</h3>
                <div className="project-demo">
                    <iframe 
                        className="project" 
                        src="https://www.loom.com/embed/0d1d5dfaaf284fbcbf726df9f89d7607" 
                        width="540" 
                        height="450"
                        loading="lazy">
                    </iframe>
                </div>
                {/* <p>Your hairstlye can be used as a form of expression and it's important to find a Salon that suits you and your hair needs!
                </p> */}
                
            </div>

            <div className="projects">

                <h3 className="project-title">Let's Hang</h3>
                <div className="project-demo">
                    <iframe 
                        className="project" 
                        src="https://www.loom.com/embed/76db4ffd392a48409c63771d56e724c9" 
                        width="540" 
                        height="450"
                        loading="lazy">
                    </iframe>
                </div>
                {/* <p>The pandemic has been way too long and we missed our friends! After not seeing one another for so long, "Let's Hang!". 
                </p> */}

            </div>

            <div className="projects">

                <h3 className="project-title">Artsy</h3>
                <div className="project-demo">
                    <iframe 
                        className="project" 
                        src="https://www.loom.com/embed/c7e74a467a3c4ec0bcd80f0f234cdf54" 
                        width="540" 
                        height="450"
                        loading="lazy">
                    </iframe>
                </div>
                {/* <p>View upcoming exhibitions at selected galleries.</p> */}
                
            </div>
        </div>
    )
}