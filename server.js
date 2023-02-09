import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") dotenv.config();

import express from "express";
import EmailsDB from "./models/EmailsDB.js";
import routes from "./routes/routes.js";

const app = express();
const port = process.env.PORT;
let db;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, () => {
	console.log(`Email REST API listening on port ${port}!`);
	db = new EmailsDB();
	db.connect();
});

export { db };
