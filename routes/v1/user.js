import UserContoller from "../../controllers/v1/UserController";
import express from "express";
const router = express.Router();

router.route("/")
    .get(UserContoller.getAll)
    .post(UserContoller.insert);

router
  .route("/:id")
  .get(UserContoller.get)
  .put(UserContoller.update)
  .delete(UserContoller.delete);

export default router;
