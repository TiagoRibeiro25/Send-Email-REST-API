import axios from "axios";
import config from "../config.js";

export default async function SendEmail(email) {
	const data = JSON.stringify({
		Messages: [
			{
				From: {
					Email: config.MAILJET_FROM_EMAIL,
					Name: email.from,
				},
				To: email.to,
				Subject: email.subject,
				HTMLPart: email.text,
			},
		],
	});

	try {
		await axios({
			method: "post",
			url: config.MAILJET_URL,
			headers: { "Content-Type": "application/json" },
			auth: {
				username: config.MAILJET_PUBLIC_KEY,
				password: config.MAILJET_SECRET_KEY,
			},
			data: data,
		});
		return true;
	} catch (error) {
		console.log(error);
		return false;
	}
}
