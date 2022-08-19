import express from "express";
import MessageController from "../../controllers/v1/MessageController";
const router = express.Router();


router
    .route("/")
    .post(MessageController.insert)
    .get(MessageController.getAll)


router
    .route("/:id")
    .delete(MessageController.delete)
export default router;
