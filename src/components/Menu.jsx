import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../assets/header.css';
import Logo from '../assets/images/AKITA_logo-640x476.jpg';
import Languages from '../Languages/Languages';

function Menu() {
    const { t } = useTranslation();

    return (
        <div className="header">
            <div className="header-wrapper container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <Link to="/">
                    <img className='header-img-logo' src={Logo} alt="topic logo" />
                </Link>
                
                <div className="header-innerWrapper flex mt-3 items-center text-green-900">
                    <span className="header-span bg-green-200 p-2 rounded-md">{t("logo-text")}</span>
                    
                    <nav className="header-nav navbar text-green-400 bg-green-100 rounded-lg p-3 shadow-lg transition duration-300 ease-in-out hover:shadow-xl ml-4"> {/* Add ml-4 for margin-left */}
                        <ul className="navbar-list flex items-center space-x-4">
                            <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/about">{t("Nega biz")}</Link></li>
                            <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/suggestion">{t("Takliflar")}</Link></li>
                            <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/results">{t("Natijalar")}</Link></li>
                            <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/grant">{t("Grant")}</Link></li>
                            <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/aid">{t("Qo`llab-Quvvatlash")}</Link></li>
                            <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/courses">{t("Kurslar")}</Link></li>
                            <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/faq">{t("Ko’p beriladigan savollar")}</Link></li>
                            <li className="nav-item language-item">
                                <Languages />
                            </li>
                        </ul>
                    </nav>
                    
                </div>
            </div>
        </div>
    );
}

export default Menu;
