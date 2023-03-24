import { MongoClient } from "mongodb";
import config from "../config.js";

export default class EmailsDB {
	constructor() {
		this.client = new MongoClient(config.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	}

	async connect() {
		try {
			await this.client.connect();
			this.db = this.client.db("emailsSent");
			this.collection = this.db.collection("emails");
			console.log("Connected to the DataBase");
		} catch (error) {
			console.error(error);
		}
	}

	async close() {
		await this.client.close();
		console.log("Disconnected from the DataBase");
	}

	async storeEmail(emailData) {
		try {
			await this.connect();
			await this.collection.insertOne(emailData);
			console.log("Email Stored in the DataBase");
		} catch (error) {
			console.error(error);
		} finally {
			await this.close();
		}
	}
}
