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
}

export default new ProjectController(projectService);
