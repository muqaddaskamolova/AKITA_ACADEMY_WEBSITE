// src/utils/sendMessage.js
import axios from 'axios';

export const SendMessage = (event, setLoading, t) => {
  setLoading(true);
  event.preventDefault();

  const Bot_Token = '5451077302:AAFU0i-gDPDTG4_a0G-p9LS1beD5y_w-D4o';
  const chat_id = 966780181;
  const url = `https://api.telegram.org/bot${Bot_Token}/sendMessage`;

  const name = document.getElementById('name').value;
  const phonenumber = document.getElementById('phone').value;
  const MessageContent = `Name: ${name} \nPhoneNumber: ${phonenumber}`;

  axios.post(url, {
    chat_id: chat_id,
    text: MessageContent
  })
    .then(() => {
      document.getElementById('myForm').reset();
      alert(t('faq.successMessage'));
    })
    .catch((err) => {
      alert(t('faq.errorMessage'));
      console.error(t('faq.errorMessage'), err);
    })
    .finally(() => {
      setLoading(false);
    });
};
