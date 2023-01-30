import express from "express";
import { handlePost } from "../controllers/handlePost.js";

const router = express.Router();

router.get("/version", (req, res) => {
   res.send("Email API v2");
});

router.get("/status", (req, res) => {
   res.send("OK");
});

router.post("/v2/send", handlePost);

export default router;
