import express from "express";
import { createUrl, getAllUrl, getUrl, deleteUrl } from "../controller/shortUrl.controller";


const router = express.Router();

router.post("/shortURL", createUrl);
router.get("/shortURL", getAllUrl);
router.get("/shortURL/:id", getUrl);
router.delete("/shortURL/:id", deleteUrl);

export default router;