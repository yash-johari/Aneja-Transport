import emailjs from '@emailjs/browser';

export interface FormData {
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropLocation: string;
  preferredDate: string;
  cargoType: string;
  message: string;
}

// Function to send email via EmailJS
export const sendEmail = async (data: FormData) => {
  try {
    const result = await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: data.name,
    email: data.email,
    phone: data.phone,
    pickupLocation: data.pickupLocation,
    dropLocation: data.dropLocation,
    preferredDate: data.preferredDate,
    cargoType: data.cargoType,
    message: data.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

    return result;
  } catch (error) {
    throw error;
  }
};
