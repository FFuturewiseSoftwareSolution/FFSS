// lib/email.js

import emailjs from '@emailjs/browser';
// import { expo } from 'maath/dist/declarations/src/easing';

const SERVICE_ID = 'FFuture1234';
const TEMPLATE_ID = 'template_m5t6c29';
const PUBLIC_KEY = 'dKm91Mf9XDCTpe0o3';

 const EMAILJS_SERVICE_ID = 'service_k9j05da';

 const ENQUIRY_TEMPLATE_ID = 'template_n5lvhl9';


 const EMAILJS_PUBLIC_KEY = 'dKm91Mf9XDCTpe0o3';

/**
 * Sends an enquiry email using EmailJS
 * @param {Object} data - Enquiry data
 */
export const sendEnquiryEmail = async (data) => {
  return await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
};

export  const EnquiryUS = async (data)=>{
  return await emailjs.send(EMAILJS_SERVICE_ID, ENQUIRY_TEMPLATE_ID, data, EMAILJS_PUBLIC_KEY);
}
