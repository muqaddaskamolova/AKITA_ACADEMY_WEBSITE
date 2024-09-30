import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { SendMessage } from '../FAQ/sendMessage'; // Import the SendMessage function

function FAQ() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-4 sm:p-8 lg:p-16" id="Questions">
      <h3 className="text-3xl sm:text-4xl text-center mb-8 sm:mb-10">{t('faq.title')}</h3>
      <ul className="max-w-3xl mx-auto">
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-base sm:text-lg">{t('faq.question1')}</p>
          <span className="bg-green-900 rounded-full font-bold text-white text-lg px-3 py-1">+</span>
        </li>
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-base sm:text-lg">{t('faq.question2')}</p>
          <span className="bg-green-900 rounded-full font-bold text-white text-lg px-3 py-1">+</span>
        </li>
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-base sm:text-lg">{t('faq.question3')}</p>
          <span className="bg-green-900 rounded-full font-bold text-white text-lg px-3 py-1">+</span>
        </li>
        <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <p className="text-base sm:text-lg">{t('faq.question4')}</p>
          <span className="bg-green-900 rounded-full font-bold text-white text-lg px-3 py-1">+</span>
        </li>
      </ul>

      <div className="bg-gray-200 px-4 py-6 sm:px-8 sm:py-8 lg:px-16 lg:py-10 bg-opacity-70 rounded-2xl mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center items-start max-w-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold">{t('faq.subtitle')}</h2>
          <p className="text-base sm:text-lg">{t('faq.contactPrompt')}</p>
        </div>
        <form id="myForm" className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={(e) => SendMessage(e, setLoading, t)}>
          <input
            id="name"
            type="text"
            placeholder={t('faq.namePlaceholder')}
            className="input input-bordered rounded-3xl input-primary w-full bg-green-400 bg-opacity-60"
          />
          <input
            id="phone"
            type="text"
            placeholder={t('faq.phonePlaceholder')}
            className="input input-bordered rounded-3xl input-primary w-full bg-green-400 bg-opacity-60"
          />
          <button
            type="submit"
            className="btn btn-success bg-green-400 rounded-3xl text-white uppercase py-2 px-4 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? t('faq.sending') : t('faq.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FAQ;
