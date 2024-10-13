
import { useState } from 'react';
import Course1 from "../../assets/images/course 1.jfif";
import Course2 from "../../assets/images/course 2.jpg";
import Course3 from "../../assets/images/course3.jfif";
import { useTranslation } from "react-i18next";

function Courses() {
  const { t } = useTranslation();
  const [activeCourse, setActiveCourse] = useState(null); // To manage which course is selected for more info

  const toggleCourseDetails = (courseName) => {
    setActiveCourse(activeCourse === courseName ? null : courseName);
  };

  return (
    <div className="my-10" id="Register">
      <h2 className="text-4xl text-center mb-10 text-green-900">
        {t("O'zingizga mos kursga ro'yhatdan o'ting")}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* Intensive Course */}
        <li className="bg-gradient-to-b from-green-200 to-green-400 rounded-2xl pb-5 shadow-md flex flex-col transition-transform transform hover:scale-105">
          <img src={Course1} alt="" className="w-full h-32 object-cover rounded-t-2xl" />
          <div className="px-5 py-4 flex flex-col flex-grow">
            <span className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold text-green-900">{t("Intensive")}</h3>
              <p className="bg-accent rounded-full text-xs text-white py-1 px-3">
                {t("Davomiyligi: 5 oy")}
              </p>
            </span>
            <p className="text-sm mb-5 flex-grow text-green-900">
              <span className="text-yellow-600">{t("Koreys tilini")} </span> {t("chuqur o’zlashtirmoqchi bo’lganlar uchun haftada 6 kun 1.5 soatdan intensive kurs.")}
            </p>
            <span className="flex items-center justify-between">
              <button
                className="btn btn-accent rounded-full px-6 text-xs text-green-900"
                onClick={() => toggleCourseDetails("Intensive")}
              >
                {t(activeCourse === "Intensive" ? "Ma'lumotni yopish" : "Ko'proq ma'lumot...")}
              </button>
              <p className="text-xs text-green-700 font-semibold">{t("970.000 so'm/oy")}</p>
            </span>
            {activeCourse === "Intensive" && (
              <div className="mt-4 text-green-900">
                <p>{t("Intensive kurs haqida batafsil ma'lumot:")}</p>
                <ul className="list-disc pl-5 text-sm">
                  <li>{t("Birinchi oy: Alfavit va asosiy grammatika.")}</li>
                  <li>{t("Ikkinchi oy: Oddiy so'zlashuv va yozuv mashqlari.")}</li>
                  <li>{t("Keyingi oylarda: Imtihon tayyorgarliklari va o'qish amaliyoti.")}</li>
                </ul>
              </div>
            )}
          </div>
        </li>

        {/* Odatiy Course */}
        <li className="bg-gradient-to-b from-green-200 to-green-400 rounded-2xl pb-5 shadow-md flex flex-col transition-transform transform hover:scale-105">
          <img src={Course2} alt="" className="w-full h-32 object-cover rounded-t-2xl" />
          <div className="px-5 py-4 flex flex-col flex-grow">
            <span className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold text-green-900">{t("Odatiy")}</h3>
              <p className="bg-accent rounded-full text-xs text-white py-1 px-3">
                {t("Davomiyligi: 5 oy")}
              </p>
            </span>
            <p className="text-sm mb-5 flex-grow text-green-900">
              {t("Haftada 3 kun 1.5 soatdan  iborat odatiy Koreys tili darslari.")}
            </p>
            <span className="flex items-center justify-between">
              <button
                className="btn btn-accent rounded-full px-6 text-xs text-green-900"
                onClick={() => toggleCourseDetails("Odatiy")}
              >
                {t(activeCourse === "Odatiy" ? "Ma'lumotni yopish" : "Ko'proq ma'lumot...")}
              </button>
              <p className="text-xs text-green-700 font-semibold">{t("560.000 so'm/oy")}</p>
            </span>
            {activeCourse === "Odatiy" && (
              <div className="mt-4 text-green-900">
                <p>{t("Odatiy kurs haqida batafsil ma'lumot:")}</p>
                <ul className="list-disc pl-5 text-sm">
                  <li>{t("Talaffuz va muloqot ko'nikmalari.")}</li>
                  <li>{t("Grammatika va so'z boyligini o'rganish.")}</li>
                  <li>{t("Ko'rgazmali o'qitish metodlari.")}</li>
                </ul>
              </div>
            )}
          </div>
        </li>

        {/* Individual Course */}
        <li className="bg-gradient-to-b from-green-200 to-green-400 rounded-2xl pb-5 shadow-md flex flex-col transition-transform transform hover:scale-105">
          <img src={Course3} alt="" className="w-full h-32 object-cover rounded-t-2xl" />
          <div className="px-5 py-4 flex flex-col flex-grow">
            <span className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold text-green-900">{t("Individual")}</h3>
              <p className="bg-accent rounded-full text-xs text-white py-1 px-3">
                {t("Davomiyligi: 5 oy")}
              </p>
            </span>
            <p className="text-sm mb-5 flex-grow text-green-900">
              {t("O’qituvchidan")} <span className="text-yellow-600">{t(" individual")}</span> {t("dars olmoqchi bo’lganlar uchun haftada 3 kun 1.5 soatdan darslar. Moslashuvchan grafik va individual yondashuv.")}
            </p>
            <span className="flex items-center justify-between">
              <button
                className="btn btn-accent rounded-full px-6 text-xs text-green-900"
                onClick={() => toggleCourseDetails("Individual")}
              >
                {t(activeCourse === "Individual" ? "Ma'lumotni yopish" : "Ko'proq ma'lumot...")}
              </button>
              <p className="text-xs text-green-700 font-semibold">{t("1.800.000 so'm/oy")}</p>
            </span>
            {activeCourse === "Individual" && (
              <div className="mt-4 text-green-900">
                <p>{t("Individual kurs haqida batafsil ma'lumot:")}</p>
                <ul className="list-disc pl-5 text-sm">
                  <li>{t("Shaxsiy o'qituvchi bilan darslar.")}</li>
                  <li>{t("Moslashuvchan jadval.")}</li>
                  <li>{t("Individual yondashuv.")}</li>
                </ul>
              </div>
            )}
          </div>
        </li>

      </ul>
    </div>
  );
}

export default Courses;
