import express from "express";
import { createDeveloper } from "../../controllers/v1/developer";
const router = express.Router();

router.route("/").post(createDeveloper);

export default router;
