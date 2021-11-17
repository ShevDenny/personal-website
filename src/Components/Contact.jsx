export default function Contact(){

    return (
        <div className="contact">
            <h3>Shoot me an Email!</h3> 
            <div className="contact-form-container">
                <div className="contact-form">
                    <form  action="https://formspree.io/f/xyylavyg" className="form-contact" method="POST" target="_blank">
                        <div className="form-control">
                            <label for="name">Name </label>
                            <input
                                type="text"
                                id="name"
                                name="sender-name"
                                placeholder="Enter Your Name"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label for="email">Email </label>
                            <input
                                type="email"
                                id="email"
                                name="sender-email"
                                placeholder="Enter Your Email"
                                className="input-field"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label for="message">Message </label>
                            <textarea
                                id="message"
                                cols="60"
                                rows="8"
                                name="essage"
                                placeholder="Enter Your Message"
                                className="input-field"
                                required
                            ></textarea>
                        </div>
                        <input 
                            type="submit" 
                            value="Submit"
                            id="submit-btn"
                            className="submit-btn"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}