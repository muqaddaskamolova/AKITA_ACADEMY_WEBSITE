import Marquee from "react-fast-marquee";
import Form from "../assets/images/forma2.png";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import  { useState } from 'react';
function Aid() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const SendMessage = (event) => {
    setLoading(true);
    event.preventDefault();

    const Bot_Token = '5451077302:AAFU0i-gDPDTG4_a0G-p9LS1beD5y_w-D4o';
    const chat_id = 966780181;
    const url = `https://api.telegram.org/bot${Bot_Token}/sendMessage`;

    const fullname = document.getElementById('fullname').value;
    const MessageContent = `Fulname: ${fullname} `

    axios.post(url, {
      chat_id: chat_id,
      text: MessageContent
    })
      .then((res) => {
        document.getElementById('myForm').reset();
        alert('You have sent the message successfully!');
        console.log(res)
      })
      .catch((err) => {
        alert('Something went wrong!');
        console.error('Something went wrong!', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  

  return (
    <div className="align-content mt-10 px-4 lg:px-0">
      {/* Sarlavha */}
      <h3 className="text-2xl lg:text-4xl font-semibold text-center mb-10 max-w-3xl mx-auto">
        {t("Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant yutishda yordam beramiz")}
      </h3>
      
      <div className="flex flex-col gap-5 sm:flex-row items-center">
        {/* Matn va tugma */}
        <div className="max-w-md mx-auto sm:mx-0">
          <h6 className="text-xl lg:text-2xl mb-5 lg:mb-10">
            <span className="text-accent">{t("AKITA academy consulting")}</span>{t("jamoasi sizga universitet tanlash, visa olish va grant yutishingizda yaqindan ko’maklashadi")}
          </h6>
          <p className="text-base lg:text-lg mb-5">
            {t("Ko'proq ma'lumot olish uchun bepul konsultatsiyaga yoziling!")} 
          </p>
          <form id="myForm" className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={SendMessage}>
          <input
            id="fullname"
            type="text"
            placeholder="Ism va Familiyangiz"
            className="input input-bordered rounded-3xl input-primary w-full bg-green-900 bg-opacity-60"
          />
          <button
          type="submit"
          className="btn btn-success bg-green-900 rounded-3xl text-white uppercase py-2 px-4 flex items-center justify-center"
          disabled={loading}
        >
           {loading ? 'Yuborilmoqda...' : t("Ariza qoldirish")}
        </button>
          
          </form>
        </div>

        {/* Marquee */}
        <div className="flex-1">
          <Marquee>
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
            <img src={Form} alt="forma" className="w-24 h-auto mx-2" />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Aid;