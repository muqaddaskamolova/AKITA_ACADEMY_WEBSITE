
import Chat from "../assets/images/reklama1.png";
import Rocket from "../assets/images/reklam2.png";
import Money from "../assets/images/reklama3.png";
import Travel from "../assets/images/reklama4.png";
import Target from "../assets/images/reklama5.png";
import Key from "../assets/images/reklama6.png";
import { Button } from 'antd';
import { useTranslation } from "react-i18next";

function Suggestion() {
  const { t } = useTranslation();
  
  return (
    <div className="py-10 px-4 md:px-8">
      {/* Sarlavha */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 max-w-4xl mx-auto">
        {t("AKITA academiya aniq siz uchun agar siz")} :
      </h2>
      
      {/* Tavsiyalar ro'yxati */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-200 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Chat} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            <span className="text-blue-400">{t("Qisqa")}</span> {t("muddat ichida Koreys tilida gaplashishni istaysiz")}
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-200 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Rocket} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Koreys tilini o'rganib o'z")} 
            <span className="text-blue-400">{t("karyerangizni")}</span> {t("qurmoqchisiz")}
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-200 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Money} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Akita sertifikatini olib Koreyaning nufuzli universitetlariga")} 
            <span className="text-blue-400">{t("GRANT")}</span>{t(" yutmoqchisiz")}
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-200 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Travel} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Janubiy Koreya davlatida")} 
            <span className="text-blue-400">{t("o’qish")}</span>{t("va")} 
            <span className="text-blue-400">{t("ishlash")}</span> {t("uchun ketmoqchisiz")}
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-200 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Target} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Koreys tilini o’rta darajda bilasiz va darajangizni")} {" "}
            <span className="text-blue-400">{t("oshirmoqchisiz")}</span>
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-200 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Key} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Ko’p yillardan buyon o’qib ham")} 
            <span className="text-blue-400">{t("natijaga")}</span>{t("chiqa olmayapsiz")} 
          </p>
        </li>
      </ul>

      {/* Tugma */}
      <div className="flex justify-center mt-8">
        <Button className="text-white bg-emerald-700 w-80 h-20 rounded-full text-lg font-bold" type="primary">
          {t("HA, BU MEN")}
        </Button>
      </div>
    </div>
  );
}

export default Suggestion;