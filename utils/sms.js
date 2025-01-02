// utils/sms.js
import twilio from 'twilio';

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendSMS = async (to, message) => {
  await client.messages.create({
    body: message,
    from: '+1234567890', // Twilio phone number
    to,
  });
};
