export default function Header() {

    return (
        <div className="header-div">
            <header className="header">
                <nav className="nav-bar">
                    <h4><a className="name" href="/">Shevon Denny </a></h4> 
                    <ul className="nav-nav"> 
                        <li><a className="nav-links" href="/">Home</a></li>
                        <li><a className="nav-links" href="/about">About Me</a></li>
                        <li><a className="nav-links" href="/portfolio">Portfolio</a></li>
                    </ul>
                    <button className="burger-menu" id="burger-menu">
                        <div className="container" onclick="myFunction(this)">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </button>
                </nav>
            </header>

        </div>
    )
}