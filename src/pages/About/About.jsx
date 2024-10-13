
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
    <div className="my-10 relative p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24" id="About">
      <h3 className="text-4xl text-green-900 text-center mb-20">{t("about.title")}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16">
        {[Test1, Test2, Test3, Test4, Test5, Test6].map((image, index) => (
          <div key={index} className="card w-full max-w-sm shadow-xl bg-gradient-to-b from-green-200 to-green-400 h-[240px] relative"> {/* Adjusted height */}
            <img src={image} alt="" width={64} height={64} className="absolute top-[-35px] left-6" />
            <div className="card-body px-6 pt-12 pb-6">
              <h4 className="card-title text-green-900 text-xl font-bold">
                {t(`about.${["professionalTeachers", "freeCoworking", "weeklyEvents", "freeExams", "supportCurators", "consultantService"][index]}`)}
              </h4>
              <p className="text-lg">
                {t(`about.${["professionalTeachersDescription", "freeCoworkingDescription", "weeklyEventsDescription", "freeExamsDescription", "supportCuratorsDescription", "consultantServiceDescription"][index]}`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
