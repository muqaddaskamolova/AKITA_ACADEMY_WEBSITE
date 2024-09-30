
import "./language.css";
import { useTranslation } from "react-i18next";


function Languages() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language; // Get current language directly from i18n

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div className="translate relative left-[40px] top-[0] flex items-center mt-5">
           
            <select
                className='translate-select absolute right-[-50] top-[-50]'
                name="lng"
                id="ln"
                onChange={handleChange}
                value={currentLanguage}
            > 
                <optgroup label="Uzbek">
                
                    <option value="uz">Uzbek</option>
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </optgroup>
            </select>
        </div>
    );
}

export default Languages;