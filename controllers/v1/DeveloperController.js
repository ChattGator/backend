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

  async login(req, res) {
    try {
      if (req.user) {
        return res.status(200).json({ error: false, data: req.user });
      }

      return res.status(400).json({ error: true, data: null });
    } catch (err) {
      return res.status(400).json({ error: true, data: null });
    }
  }
}

export default new DeveloperController(developerService);
