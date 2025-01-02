// utils/email.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (to, message) => {
  const msg = {
    to,
    from: 'your-email@example.com',
    subject: 'Event Notification',
    text: message,
  };
  await sgMail.send(msg);
};
