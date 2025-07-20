import "./Footer.css"
import Copyright from "../Copyright/Copyright";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-title">
                    <label className="footer-title-label">Site desenvolvido por:</label>
                    <h2 className="footer-title-text">Erick Lima</h2>
                </div>

                <p className="footer-text">Esse projeto foi desenvolvido com a finalidade de aplicar todos os conhecimentos adquiridos através dos cursos da Alura de Figma, React e Design, recriando um site que havia sido desenvolvido para um trabalho da matéria de filosofia no curso técnico de "Informática Para Internet" da ETEC de Francisco Morato.</p>
                
                <div className="footer-callToAction">
                    <label className="footer-callToAction-label">Acesse a página do projeto no:</label>
                    
                    <a 
                        href="https://github.com/ErickLimasv/sobre-da-vinci" 
                        target="_blank" rel="noreferrer noopener" 
                        className="footer-callToAction-button"
                    >
                        GitHub <BsGithub className="icon"/>
                    </a>
                </div>
            </div>
            <Copyright/>
        </footer>
    )
}