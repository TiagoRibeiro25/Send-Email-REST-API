import express from "express";
import helmet from "helmet";
import config from "./config.js";
import routes from "./routes/routes.js";

const app = express();
const port = config.port;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use((req, res) => {
	res.status(404).json({ error: "Not found" });
});

app.listen(port, () => console.log(`Email REST API listening on port ${port}!\n`));
