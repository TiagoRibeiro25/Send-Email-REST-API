import express from "express";
import { handlePost } from "../controllers/handlePost.js";

const router = express.Router();

router.get("/status", (req, res) => {
   res.send("OK");
});

router.post("/send", handlePost);

export default router;
