import "./Navbar.css";
import { PiList, PiPaintBrush, PiInfo, PiLightbulb } from "react-icons/pi";
import { useState } from "react";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState();

    function ToggleMenuMobile() {
        if (showMenu == null) {
            setShowMenu(true);
        }
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    return (
        <nav className="navbar">
            <div className="menu-mobile">
                <h4>Leonardo da Vinci</h4>
                <PiList onClick={ToggleMenuMobile} className="navbar-menu-icon"/>
            </div>

            <div className="navbar-links desktop">
                <a href="#curiosidades">Curiosidades<PiInfo className="navbar-link-icon"/></a>
                <a href="#pinturas">Pinturas<PiPaintBrush className="navbar-link-icon"/></a>
                <a href="#invencoes">Invenções<PiLightbulb className="navbar-link-icon"/></a>
            </div>

            {showMenu && <div className="navbar-links mobile">
                <a href="#curiosidades">Curiosidades<PiInfo className="navbar-link-icon"/></a>
                <a href="#pinturas">Pinturas<PiPaintBrush className="navbar-link-icon"/></a>
                <a href="#invencoes">Invenções<PiLightbulb className="navbar-link-icon"/></a>
            </div>}
        </nav>
    )
}