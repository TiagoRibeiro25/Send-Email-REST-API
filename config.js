import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") dotenv.config();

export default {
	port: process.env.PORT || 3000,
	DB_URI: process.env.EMAIL_DB_URI,
	API_ACCESS_TOKEN: process.env.API_ACCESS_TOKEN,
	MAILJET_PUBLIC_KEY: process.env.MAILJET_PUBLIC_KEY,
	MAILJET_SECRET_KEY: process.env.MAILJET_SECRET_KEY,
	MAILJET_FROM_EMAIL: process.env.MAILJET_FROM_EMAIL,
	MAILJET_URL: process.env.MAILJET_URL,
};
