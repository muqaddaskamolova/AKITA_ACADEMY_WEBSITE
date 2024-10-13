
import GKS from "../assets/images/gks.png";
import { useTranslation } from "react-i18next";

function Grant() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-b from-green-200 to-green-400 py-10 px-4 md:px-8 mb-10">
      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-semibold text-center mb-10 max-w-3xl mx-auto">
        {t("grant.title")}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img src={GKS} alt="GKS Scholarship" className="w-full h-auto max-w-sm" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <h5 className="text-xl font-semibold mb-5">
            {t("grant.scholarshipTitle")}{" "}
            <span className="text-green-600">$70,000</span>
          </h5>
          <p className="mb-5 text-base">
            {t("grant.description")} <span className="text-blue-400">{t("grant.foreign")}</span>{" "}
            {t("grant.scholarshipDetails")}
          </p>
          
          <h5 className="text-xl font-semibold my-5">{t("grant.benefitsTitle")}</h5>
          <ul className="list-disc list-inside pl-5">
            <li className="mb-2">{t("grant.benefit1")}</li>
            <li className="mb-2">{t("grant.benefit2")}</li>
            <li>{t("grant.benefit3")}<span className="text-blue-300"> {t("grant.more")}</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Grant;
