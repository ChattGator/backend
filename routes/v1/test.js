import TestController from "../../controllers/v1/TestController";
import express from "express";
const router = express.Router();

router.get("/", TestController.getAll);
router.get("/:id", TestController.get);
router.post("/", TestController.insert);
router.put("/:id", TestController.update);
router.delete("/:id", TestController.delete);

export default router;
