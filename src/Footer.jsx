export default function Footer() {

    function handleScroll(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    
    return (
        <div className="footer">
            <p>Built By: Shevon Denny</p>
            <div className="socials">   
                <a href="https://github.com/ShevDenny" target="_blank">
                    <img 
                        className="connect-icon"
                        src="https://img.icons8.com/material-rounded/30/000000/github.png" 
                        alt="github" 
                        loading="lazy"
                    />
                </a>
            
                <a href="http://shevondenny.medium.com/" target="_blank">
                <img 
                    className="connect-icon"
                    src="https://img.icons8.com/external-itim2101-lineal-itim2101/30/000000/external-blog-copywriting-itim2101-lineal-itim2101-1.png" 
                    alt="blog" 
                    loading="lazy"
                />
                </a>
          
                <a href="https://www.linkedin.com/in/shevon-denny/" target="_blank">
                    <img 
                        className="connect-icon"
                        src="https://img.icons8.com/metro/26/000000/linkedin.png" 
                        alt="linkedIn" 
                        loading="lazy"
                    />
                </a>
            </div>
            {/* <i 
                className="scroll-up"
                onClick={handleScroll} 
                ><img 
                    // src="https://img.icons8.com/ios-glyphs/20/000000/double-up--v2.gif"
                    src="https://img.icons8.com/ultraviolet/40/000000/upload--v2.gif"
                    className="scroll-icon" 
                    alt="scroll-up"
                />
              
            
            </i> */}
        </div>
    )
}