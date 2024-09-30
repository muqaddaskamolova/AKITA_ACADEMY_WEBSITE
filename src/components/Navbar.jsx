import Menu from './Menu';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
//import Languages from '../Languages/Languages';

function Navbar() { 
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Menyu tugmasini bosish orqali menyuni ochish va yopish
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar align-content py-0">
      <div className="navbar-start flex items-center justify-between">
        
        {/* Mobil menyu tugmasi */}
        <button 
          className="lg:hidden p-2"
          onClick={toggleMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        
        {/* Menyu (mobilda ochiriladigan bo'lsa) */}
        <div className={`lg:flex lg:ml-18 ${isOpen ? 'block' : 'hidden'}`}>
          <Menu />
         </div>
         
        <div className="navbar-end hidden lg:flex items-center">
        {/* Aloqa ma'lumotlari */}
        <a href="#Contact">
          <p className="flex flex-col font-semibold ">
            +998 (33) 306 00 98
             <span>{t("Hoziroq bog'\nlaning")}</span> 
          </p>
        </a>
      </div>
     
      </div>
</div>
  );
}

export default Navbar;