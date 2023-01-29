import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") dotenv.config();

import express from "express";
import routes from "./routes/routes.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api/v2", routes);

app.get("/api/version", (req, res) => {
   res.send("Email API v2");
});

app.listen(port, () => {
   console.log(`Email REST API listening on port ${port}!`);
});
