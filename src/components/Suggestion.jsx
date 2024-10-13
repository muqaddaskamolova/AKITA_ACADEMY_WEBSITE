import { useState } from "react";
import Chat from "../assets/images/reklama1.png";
import Rocket from "../assets/images/reklam2.png";
import Money from "../assets/images/reklama3.png";
import Travel from "../assets/images/reklama4.png";
import Target from "../assets/images/reklama5.png";
import Key from "../assets/images/reklama6.png";
import { Button } from 'antd';
import { useTranslation } from "react-i18next";
import axios from 'axios';

function Suggestion() {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [loading, setLoading] = useState(false);   // State to handle loading
  
  const handleButtonClick = () => {
    setShowForm(true); // Show the form when the button is clicked
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const fullname = document.getElementById('registerFullname').value;
    const phone = document.getElementById('registerPhone').value;
    const address = document.getElementById('registerAddress').value;

    // Prevent submission if fields are empty
    if (!fullname || !phone || !address) {
      alert(t("Iltimos, barcha maydonlarni to'ldiring!"));
      setLoading(false);
      return;
    }

    // Telegram Bot Configuration
    const Bot_Token = '5451077302:AAFU0i-gDPDTG4_a0G-p9LS1beD5y_w-D4o';
    const chat_id = 966780181;
    const url = `https://api.telegram.org/bot${Bot_Token}/sendMessage`;

    // Message to be sent
    const MessageContent = `Fullname: ${fullname} \nPhoneNumber: ${phone} \nAddress: ${address}`;

    // Send message to the bot
    axios.post(url, {
      chat_id: chat_id,
      text: MessageContent
    })
      .then(() => {
        document.getElementById('registerForm').reset();
        alert(t('Xabar muvaffaqiyatli yuborildi!'));
        setShowForm(false); // Close the form after successful submission
      })
      .catch((err) => {
        alert(t('Xatolik yuz berdi!'));
        console.error('Something went wrong!', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-10 px-4 md:px-8">
      {/* Sarlavha */}
      <h2 className="text-3xl md:text-4xl text-green-900 font-semibold text-center mb-10 max-w-4xl mx-auto">
        {t("AKITA academiya aniq siz uchun agar siz")} :
      </h2>
      
      {/* Tavsiyalar ro'yxati */}
      <ul className="bg-gradient-to-b from-green-200 to-green-400 min-h-[400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto p-6"> {/* Adjusted height and padding */}
        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Chat} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            <span className="text-blue-600">{t("Qisqa")}</span> {t("muddat ichida Koreys tilida gaplashishni istaysiz")}
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Rocket} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Koreys tilini o'rganib o'z")} 
            <span className="text-blue-600">{t("karyerangizni")}</span> {t("qurmoqchisiz")}
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Money} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Akita sertifikatini olib Koreyaning nufuzli universitetlariga")} 
            <span className="text-blue-600">{t("GRANT")}</span>{t(" yutmoqchisiz")}
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Travel} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Janubiy Koreya davlatida")} 
            <span className="text-blue-600">{t("o’qish")}</span>{t("va")} 
            <span className="text-blue-600">{t("ishlash")}</span> {t("uchun ketmoqchisiz")}
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Target} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Koreys tilini o’rta darajda bilasiz va darajangizni")} {" "}
            <span className="text-blue-600">{t("oshirmoqchisiz")}</span>
          </p>
        </li>

        <li className="flex flex-col items-center text-center max-w-xs mx-auto">
          <div className="bg-blue-400 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <img src={Key} alt="" className="w-16 h-16" />
          </div>
          <p className="text-base">
            {t("Ko’p yillardan buyon o’qib ham")} 
            <span className="text-blue-600">{t("natijaga")}</span>{t("chiqa olmayapsiz")} 
          </p>
        </li>
      </ul>

      {/* Tugma */}
      <div className="flex justify-center mt-8">
        <Button 
          className="bg-gradient-to-b from-green-200 to-green-400 text-white w-80 h-20 rounded-full text-lg font-bold" 
          type="primary"
          onClick={handleButtonClick}
        >
          {t("HA, BU MEN")}
        </Button>
      </div>

      {/* Kursga yozilish formasi */}
      {showForm && (
        <div className="mt-10 bg-white p-6 shadow-md rounded-lg max-w-lg mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-6 text-green-900">{t("Kursga ro'yxatdan o'tish")}</h3>
          <form id="registerForm" onSubmit={handleSubmit}>
            <input
              id="registerFullname"
              type="text"
              placeholder={t("Ismingiz va familiyangiz")}
              className="input input-bordered w-full mb-4"
            />
            <input
              id="registerPhone"
              type="text"
              placeholder={t("Telefon raqamingiz")}
              className="input input-bordered w-full mb-4"
            />
            <input
              id="registerAddress"
              type="text"
              placeholder={t("Manzilingiz")}
              className="input input-bordered w-full mb-4"
            />
            <Button 
              className="w-full text-white bg-emerald-700 rounded-full text-lg font-bold" 
              type="primary"
              htmlType="submit"
              loading={loading} // Show loading indicator when submitting
            >
              {loading ? t("Yuborilmoqda...") : t("Ro'yxatdan o'tish")}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Suggestion;
