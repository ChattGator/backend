import Controller from "./Controller";
import GroupService from "../../services/v1/GroupService";
import Group from "../../models/group";
import autoBind from "auto-bind";

const groupService = new GroupService(Group);

class GroupController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }

  async insert(req, res) {
    try {
      if (!req.body.membersList || req.body.membersList.length < 2) {
        return res
          .status(500)
          .json({ error: true, message: "Chat should have atleast 2 members" });
      }

      const response = await this.service.insert(req.body);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }

  async addMember(req, res) {
    const { id } = req.params;
    console.log("HERE")

    try {
      const response = await this.service.addMember(id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }

  async removeMember(req, res) {
    const { id } = req.params;

    try {
      const response = await this.service.removeMember(id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }
}

export default new GroupController(groupService);
