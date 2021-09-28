import {NavLink} from 'react-router-dom';

export default function Header() {

    return (
        <div className="header-div">
            <header className="header">
                <p>Shevon Denny</p> 
                <nav className="nav-bar">
                    <NavLink className="nav-links" to="/">Home</NavLink>
                    <NavLink className="nav-links" to="/about">About Me</NavLink>
                    <NavLink className="nav-links" to="/portfolio">Portfolio</NavLink>
                </nav>
            </header>

        </div>
    )
}