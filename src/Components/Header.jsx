import { useState } from 'react';

export default function Header() {
    const[showMenu, setShowMenu] = useState(false)

    


    return (
        <div className="header-div">
            <header className="header">
                <nav className="nav-bar">
                    <h4><a className="name" href="/">Shevon Denny </a></h4> 
                    <ul className="nav-nav"> 
                        <li><a className="nav-links" href="/">Home</a></li>
                        <li><a className="nav-links" href="/about">About</a></li>
                        <li><a className="nav-links" href="/portfolio">Portfolio</a></li>
                    </ul>
                    <button 
                        className="burger-menu" 
                        id="burger-menu"
                        onClick={() => setShowMenu(!showMenu)}>
                        <div className="container" >
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