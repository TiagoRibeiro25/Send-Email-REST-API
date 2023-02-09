import { MongoClient } from "mongodb";

export default class EmailsDB {
	constructor() {
		this.uri = process.env.EMAIL_DB_URI;
		this.client = new MongoClient(this.uri, {
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
			await this.collection.insertOne(emailData);
			console.log("Email Stored in the DataBase");
		} catch (error) {
			console.error(error);
		}
	}
}
