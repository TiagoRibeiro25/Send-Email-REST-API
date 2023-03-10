import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") dotenv.config();

import express from "express";
import routes from "./routes/routes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, () => console.log(`Email REST API listening on port ${port}!`));
