// Hero.jsx (Updated without background image code)
import { useState } from "react";
import Decoration from "../../assets/images/littleakita.png";
import "./hero.css";
import { useTranslation } from "react-i18next";
import axios from 'axios';

function Hero() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();

    const Bot_Token = '5451077302:AAFU0i-gDPDTG4_a0G-p9LS1beD5y_w-D4o';
    const chat_id = 966780181;
    const url = `https://api.telegram.org/bot${Bot_Token}/sendMessage`;

    const fullname = document.getElementById('fullname').value;
    const phonenumber = document.getElementById('phone').value;
    const MessageContent = `Fullname: ${fullname} \nPhoneNumber: ${phonenumber}`;

    axios.post(url, {
      chat_id: chat_id,
      text: MessageContent
    })
      .then((res) => {
        document.getElementById('myForm').reset();
        alert('You have sent the message successfully!', res);
      })
      .catch((err) => {
        alert('Something went wrong!');
        console.error('Something went wrong!', err);
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
          <img src={Decoration} alt="" className="w-8 h-16" />
          <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md text-green-900">
            {t("5 oyda Akitadan 6 darajagacha olishda yordam beramiz")}
          </p>
        </li>
        <li className="flex items-start gap-4 sm:gap-5 p-4 bg-white rounded-lg shadow-md">
          <img src={Decoration} alt="" className="w-8 h-16" />
          <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md text-green-900">
            {t("Akitadan yuqori darajani qo’lga kiritib, Janubiy Koreyada o’qish va ishlash imkoniyati")}
          </p>
        </li>
      </ul>

      {/* Form Section */}
      <div className="text-center mt-6">
        <form id="myForm" className="flex flex-col gap-4 mx-auto" onSubmit={SendMessage}>
          <input
            id="fullname"
            type="text"
            placeholder="Ismingiz va Familiyangiz"
            className="input input-bordered rounded-3xl input-primary w-full file:text-white bg-green-700 bg-opacity-50"
          />
          <input
            id="phone"
            type="text"
            placeholder="+998 99-999-99-99"
            className="input input-bordered rounded-3xl input-primary w-full text-white bg-green-700 bg-opacity-50"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center text-white bg-emerald-700 rounded-full py-3 px-6 sm:py-4 sm:px-8 text-lg sm:text-xl font-semibold transition hover:bg-emerald-600"
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
