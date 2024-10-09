
import Test1 from "../../assets/images/test1.svg";
import Test2 from "../../assets/images/test2.svg";
import Test3 from "../../assets/images/test3.svg";
import Test4 from "../../assets/images/test4.svg";
import Test5 from "../../assets/images/test5.svg";
import Test6 from "../../assets/images/test6.svg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="my-10" id="About">
      <h3 className="text-4xl text-green-900 text-center mb-20">{t("about.title")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16">
        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img src={Test1} alt="" width={64} height={64} className="absolute top-[-35px] left-6" />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-green-900 text-xl font-bold">{t("about.professionalTeachers")}</h5>
            <p className="text-green-800" >{t("about.professionalTeachersDescription")}</p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img src={Test2} alt="" width={64} height={64} className="absolute top-[-35px] left-6" />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-green-900 text-xl font-bold">{t("about.freeCoworking")}</h5>
            <p className="text-green-800">{t("about.freeCoworkingDescription")}</p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img src={Test3} alt="" width={64} height={64} className="absolute top-[-35px] left-6" />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-green-900 text-xl font-bold">{t("about.weeklyEvents")}</h5>
            <p className="text-green-800">{t("about.weeklyEventsDescription")}</p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img src={Test4} alt="" width={64} height={64} className="absolute top-[-35px] left-6" />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-green-900 text-xl font-bold">{t("about.freeExams")}</h5>
            <p className="text-green-800">{t("about.freeExamsDescription")}</p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img src={Test5} alt="" width={64} height={64} className="absolute top-[-35px] left-6" />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-green-900 text-xl font-bold">{t("about.supportCurators")}</h5>
            <p className="text-green-800">{t("about.supportCuratorsDescription")}</p>
          </div>
        </div>

        <div className="card w-full max-w-sm shadow-xl min-h-48 relative">
          <img src={Test6} alt="" width={64} height={64} className="absolute top-[-35px] left-6" />
          <div className="card-body px-6 pt-12 pb-6">
            <h5 className="card-title text-green-900 text-xl font-bold">{t("about.consultantService")}</h5>
            <p className="text-green-800">{t("about.consultantServiceDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
