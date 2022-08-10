import express from "express";
import { isAuthorized } from "../../middlewares/auth";
import developer from "./developer";
import project from "./project";
import test from "./test";

const router = express.Router();

router.use("/test", test);
router.use("/developer", developer);
router.use("/project", project);
router.use("/", isAuthorized, () => console.log("helloworld v1 api"));

export default router;
