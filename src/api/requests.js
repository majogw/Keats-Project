import axios from 'axios';

export async function sendEmailRequest(name, email, nachricht) {
  try {
    const response = await axios.post(
      'https://api.keatsproject.ch/mail/sendMail',
      {
        name: name,
        email: email,
        message: nachricht,
      },
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
