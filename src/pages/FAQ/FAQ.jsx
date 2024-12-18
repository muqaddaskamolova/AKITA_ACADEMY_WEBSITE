import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { SendMessage } from '../FAQ/sendMessage';
import '../../App.css';

function FAQ() {
  const { t } = useTranslation();
  
  const [loading, setLoading] = useState(false); 
  const [openQuestion, setOpenQuestion] = useState(null);
  
  const [fullname, setName] = useState(''); // State for name input
  const [question, setQuestion] = useState(''); // State for phone input

  const toggleQuestion = (questionIndex) => {
    if (openQuestion === questionIndex) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(questionIndex);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate that both name and phone are filled
    if (!fullname.trim() || !question.trim()) {
      alert(t('faq.fillAllFields')); // Alert user to fill all fields
      return; // Exit the function if any field is empty
    }

    setLoading(true); // Set loading to true while sending message

    try {
      await SendMessage(fullname, question, t); // Wait for SendMessage to complete
      alert(t('faq.messageSuccess')); // Alert about success
      setName(''); // Clear name input
      setQuestion(''); // Clear phone input
    } catch (error) {
      console.error('Message sending failed:', error);
      alert(t('faq.messageError')); // Alert about failure
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return  (
    <div className="p-4 sm:p-8 lg:p-16" id="Questions">
      <h3 className="text-3xl text-green-900 sm:text-4xl text-center mb-8 sm:mb-10">{t('faq.title')}</h3>
      <ul className="max-w-3xl mx-auto">
        {/* Questions rendering logic remains the same */}
        {[1, 2, 3, 4].map(index => (
          <li key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex justify-between items-center" onClick={() => toggleQuestion(index)}>
              <p className="text-base sm:text-lg">{t(`faq.question${index}`)}</p>
              <span className="bg-green-900 rounded-full font-bold text-white text-lg px-3 py-1">
                {openQuestion === index ? '-' : '+'}
              </span>
            </div>
            {openQuestion === index && (
              <p className="mt-4 text-sm sm:text-base">{t(`faq.answer${index}`)}</p>
            )}
          </li>
        ))}
      </ul>

      <div className="bg-gray-200 px-4 py-6 sm:px-8 sm:py-8 lg:px-16 lg:py-10 bg-opacity-70 rounded-2xl mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col justify-center items-start max-w-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold">{t('faq.subtitle')}</h2>
          <p className="text-base sm:text-lg">{t('faq.contactPrompt')}</p>
        </div>
        <form id="myForm" className="flex flex-col gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
          <input
            id="name"
            type="text"
            placeholder={t('namePlaceholder')}
            value={fullname}
            onChange={(e) => setName(e.target.value)} // Update name state on change
            className="input placeholder-light-white text-center input-bordered rounded-3xl input-primary w-full bg-green-400 bg-opacity-60"
          />
          <input
            id="phone"
            type="text"
            placeholder={t('faq.questionPlaceholder')}
            value={question}
            onChange={(e) => setQuestion(e.target.value)} // Update phone state on change
            className="input placeholder-light-white text-center input-bordered rounded-3xl input-primary w-full bg-green-400 bg-opacity-60"
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
