import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../assets/header.css';
import Logo from '../assets/images/AKITA_logo-640x476.jpg';


function Menu() {
  const { t } = useTranslation();

  return (
    <div className="header w-full">
      <div className="header-wrapper container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 lg:py-0">
        
        {/* Logo */}
        <Link to="/">
          <img className="header-img-logo w-24 lg:w-32" src={Logo} alt="topic logo" />
        </Link>
        
        {/* Nav Links */}
        <div className="header-innerWrapper flex flex-col lg:flex-row items-center mt-4 lg:mt-0">
          <span className="header-span bg-green-200 p-2 rounded-md text-center lg:text-left">
            {t("logo-text")}
          </span>
          
          <nav className="header-nav navbar text-green-400 bg-green-100 rounded-lg p-3 shadow-lg transition duration-300 ease-in-out hover:shadow-xl mt-4 lg:mt-0 lg:ml-4">
            <ul className="navbar-list flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-4">
              <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/about">{t("Nega biz")}</Link></li>
              <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/suggestion">{t("Takliflar")}</Link></li>
              <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/results">{t("Natijalar")}</Link></li>
              <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/grant">{t("Grant")}</Link></li>
              <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/aid">{t("Qo`llab-Quvvatlash")}</Link></li>
              <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/courses">{t("Kurslar")}</Link></li>
              <li className="nav-item"><Link className="nav-link hover:text-green-600 transition duration-200" to="/faq">{t("Ko’p beriladigan savollar")}</Link></li>
              
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Menu;
