import { useState } from "react";
import Decoration from "../../assets/images/littleakita.png";
import "./hero.css";
import { useTranslation } from "react-i18next";
import axios from 'axios';

function Hero() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const SendMessage = (event) => {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const phonenumber = document.getElementById('phone').value.trim();

    // Validate that inputs are not empty
    if (!fullname || !phonenumber) {
      alert('Iltimos, barcha maydonlarni to\'ldiring.');
      return;
    }

    setLoading(true);

    const Bot_Token = '5451077302:AAFU0i-gDPDTG4_a0G-p9LS1beD5y_w-D4o';
    const chat_id = 966780181;
    const url = `https://api.telegram.org/bot${Bot_Token}/sendMessage`;

    const MessageContent = `Fullname: ${fullname} \nPhoneNumber: ${phonenumber}`;

    axios.post(url, {
      chat_id: chat_id,
      text: MessageContent
    })
      .then(() => {
        document.getElementById('myForm').reset();
        alert('Sizning xabaringiz muvaffaqiyatli yuborildi!');
      })
      .catch((err) => {
        alert('Xatolik yuz berdi!');
        console.error('Xatolik yuz berdi!', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="relative p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl py-3 text-center font-semibold text-green-900">
        {t("3 oyda Koreys tilida gapirishni boshlang")}
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center py-3 tracking-wide text-green-900">
        {t("Janubiy Koreya Universitetlarida 100% gacha grant asosida o’qish imkoniyati")}
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
        <li className="flex items-start gap-4 sm:gap-5 p-4 bg-white rounded-lg shadow-md">
          <img src={Decoration} alt="Decoration" className="w-10 h-10 sm:w-12 sm:h-12" />
          <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md text-green-900">
            {t("5 oyda Akitadan 6 darajagacha olishda yordam beramiz")}
          </p>
        </li>
        <li className="flex items-start gap-4 sm:gap-5 p-4 bg-white rounded-lg shadow-md">
          <img src={Decoration} alt="Decoration" className="w-10 h-10 sm:w-12 sm:h-12" />
          <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md text-green-900">
            {t("Akitadan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati")}
          </p>
        </li>
      </ul>

      {/* Form Section */}
      <div className="text-center mt-6">
        <form id="myForm" className="flex flex-col items-center gap-4 mx-auto" onSubmit={SendMessage}>
          <input
            id="fullname"
            type="text"
            placeholder={t('namePlaceholder')} 
            className="input input-bordered text-center rounded-full input-primary w-full max-w-xs sm:max-w-sm file:text-white bg-green-700 bg-opacity-50 placeholder-light-white"
          />
          <input
            id="phone"
            type="text"
            placeholder="+998 99-999-99-99"
            className="text-center input input-bordered rounded-full input-primary w-full max-w-xs sm:max-w-sm text-white bg-green-700 bg-opacity-50 placeholder-light-white"
          />

          <button
            type="submit"
            className={`inline-flex items-center justify-center text-white bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-full py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl font-semibold transition transform hover:scale-105 w-full max-w-xs sm:max-w-sm`}
            disabled={loading}
           >
            {loading ? 'Yuborilmoqda...' : t("Bepul kursga yozilish")}
          </button>
        </form>
      </div>

      <p className="text-center mt-3 text-sm sm:text-base">{t("Birinchi darsga bepul yoziling!")}</p>
    </div>
  );
}

export default Hero;
