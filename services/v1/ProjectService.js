import HttpResponse from "../../helpers/HttpResponse";
import Service from "./Service";
import Developer from "../../models/developer";
import DeveloperService from "./DeveloperService";
const developerService = new DeveloperService(Developer);

class ProjectService extends Service {
  constructor(model) {
    super(model);
  }

  async insert(data) {
    try {
      const item = await this.model.create(data);
      await developerService.addProject(data.developerId, item._id);
      if (item) {
        return new HttpResponse(item);
      }
      throw new Error("Something wrong happened");
    } catch (error) {
      throw error;
    }
  }

  async delete(developerId, id) {
    try {
      const item = await this.model.findByIdAndDelete(id);
      await developerService.removeProject(developerId, id);
      if (!item) {
        const error = new Error("Item not found");

        error.statusCode = 404;
        throw error;
      } else {
        return new HttpResponse(item, { deleted: true });
      }
    } catch (errors) {
      throw errors;
    }
  }
}

export default ProjectService;
