import express from "express";
import { createDeveloper } from "../controllers/developerController";
const router = express.Router();

router.route("/create").post(createDeveloper);

export default router;
