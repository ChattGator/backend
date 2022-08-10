import ProjectController from "../../controllers/v1/ProjectController";
import express from "express";
const router = express.Router();

router
  .route("/")
  .get(ProjectController.getAll)
  .post(ProjectController.insert);

router
  .route("/:id")
  .get(ProjectController.get)
  .put(ProjectController.update)
  .delete(ProjectController.delete);

export default router;
