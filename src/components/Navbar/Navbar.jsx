import "./Navbar.css";
import { PiList, PiPaintBrush, PiInfo, PiLightbulb } from "react-icons/pi";

export default function Navbar() {
    return (
        <nav className="navbar">
            <h4>Leonardo da Vinci</h4>

            <div className="navbar-links">
                <a href="#curiosidades">Curiosidades<PiInfo className="navbar-link-icon"/></a>
                <a href="#pinturas">Pinturas<PiPaintBrush className="navbar-link-icon"/></a>
                <a href="#invencoes">Invenções<PiLightbulb className="navbar-link-icon"/></a>
            </div>

            <PiList className="navbar-menu"/>
        </nav>
    )
}