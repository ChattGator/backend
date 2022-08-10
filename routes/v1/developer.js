import DeveloperController from "../../controllers/v1/DeveloperController";
import express from "express";
const router = express.Router();

router
  .route("/")
  .get(DeveloperController.getAll)
  .post(DeveloperController.insert);

router
  .route("/:id")
  .get(DeveloperController.get)
  .put(DeveloperController.update)
  .delete(DeveloperController.delete);

export default router;
