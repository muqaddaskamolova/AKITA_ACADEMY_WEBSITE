import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../assets/header.css';
import Logo from '../assets/images/logo.png';
import Languages from '../Languages/Languages';
//import { TbWorld } from "react-icons/tb";
//<TbWorld className='translate-icon ' />
function Menu() {
    const { t } = useTranslation();
    
    return (
        <div className="header ">
            <div className="header-wrapper container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <Link to="/">
        <img className='header-img-logo' src={Logo} alt="topic logo" />
      </Link>
                
                <div className="header-innerWrapper flex mt-3 items-center">
                    <span className="header-span">{t("logo-text")}</span>
                    
                    <nav className="header-nav navbar">
                        <ul className="navbar-list">
                            <li className="nav-item"><Link to="/about">{t("Nega biz")}</Link></li>
                            <li className="nav-item"><Link to="/suggestion">{t("Suggestions")}</Link></li>
                            <li className="nav-item"><Link to="/results">{t("Natijalar")}</Link></li>
                            <li className="nav-item"><Link to="/grant">{t("Grant")}</Link></li>
                            <li className="nav-item"><Link to="/aid">{t("Support")}</Link></li>
                            <li className="nav-item"><Link to="/courses">{t("Kurslar")}</Link></li>
                            <li className="nav-item"><Link to="/faq">{t("Ko’p beriladigan savollar")}</Link></li>
                            
                            
                           
                        </ul>
                        <Languages/>
                    </nav>
                    
                    
                </div>
               
            </div>
        </div>
    );
}

export default Menu;