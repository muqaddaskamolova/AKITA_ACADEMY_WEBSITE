import axios from 'axios';

export const SendMessage = async (fullname, question, t) => {
  const Bot_Token = '5451077302:AAFU0i-gDPDTG4_a0G-p9LS1beD5y_w-D4o';
  const chat_id = 966780181;
  const url = `https://api.telegram.org/bot${Bot_Token}/sendMessage`;

  const MessageContent = `FullName: ${fullname} \nQuestion: ${question}`;

  try {
    await axios.post(url, {
      chat_id: chat_id,
      text: MessageContent
    });
  } catch (err) {
    throw new Error(t('faq.errorMessage'), err); // Throw error to be caught in handleSubmit
  }
};
