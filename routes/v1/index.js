import express from "express";
import { isAuthorized } from "../../middlewares/auth";
import developer from "./developer";
import project from "./project";
import user from "./user";
import test from "./test";
import group from "./group";

const router = express.Router();

router.use("/test", test);
router.use("/developer", developer);
router.use("/user", user);
router.use("/group", group);
router.use("/project", isAuthorized, project);
router.use("/", isAuthorized, () => console.log("helloworld v1 api"));

export default router;
