import Controller from "./Controller";
import DeveloperService from "../../services/v1/DeveloperService";
import Developer from "../../models/developer";
import autoBind from "auto-bind";

const developerService = new DeveloperService(Developer);

class DeveloperController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new DeveloperController(developerService);
