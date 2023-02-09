import express from "express";
import { handlePost } from "../controllers/handlePost.js";

const router = express.Router();

router.get("/version", (req, res) => {
	res.json({ version: "Email API v2" });
});

router.get("/status", (req, res) => {
	res.json({ status: "OK" });
});

router.post("/v2/send", handlePost);

export default router;
