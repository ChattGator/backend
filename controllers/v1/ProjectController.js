import Controller from "./Controller";
import ProjectService from "../../services/v1/ProjectService";
import Project from "../../models/project";
import autoBind from "auto-bind";

const projectService = new ProjectService(Project);

class ProjectController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }

  async insert(req, res) {
    const { _id } = req.user;
    const data = req.body;
    console.log(data);
    try {
      const response = await this.service.insert({
        ...data,
        developerId: _id,
      });

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }
}

export default new ProjectController(projectService);
