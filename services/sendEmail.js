import axios from "axios";

export default async function SendEmail(email) {
   const data = JSON.stringify({
      Messages: [
         {
            From: {
               Email: process.env.MAILJET_FROM_EMAIL,
               Name: email.from,
            },
            To: email.to,
            Subject: email.subject,
            TextPart: email.text,
         },
      ],
   });

   const config = {
      method: "post",
      url: process.env.MAILJET_URL,
      headers: { "Content-Type": "application/json" },
      auth: {
         username: process.env.MAILJET_PUBLIC_KEY,
         password: process.env.MAILJET_SECRET_KEY,
      },
      data: data,
   };

   try {
      const response = await axios(config);
      console.log(JSON.stringify(response.data));
      return true;
   } catch (error) {
      console.log(error);
      return false;
   }
}
