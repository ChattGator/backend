import GroupController from "../../controllers/v1/GroupController";
import express from "express";
const router = express.Router();

router.route("/").get(GroupController.getAll).post(GroupController.insert);

router
  .route("/:id")
  .get(GroupController.get)
  .put(GroupController.update)
  .delete(GroupController.delete);

router.route("/member/add/:id").patch(GroupController.addMember);

router.route("/member/remove/:id").patch(GroupController.removeMember);

export default router;
