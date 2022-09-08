import HttpResponse from "../../helpers/HttpResponse";
import Service from "./Service";
import Developer from "../../models/developer";
import Message from "../../models/message";
import Group from "../../models/group";
import User from "../../models/user";
import DeveloperService from "./DeveloperService";
import MessageService from "./MessageService";
import GroupService from "./GroupService";
import UserService from "./UserService";

const developerService = new DeveloperService(Developer);
const messageService = new MessageService(Message);
const groupService = new GroupService(Group);
const userService = new UserService(User);

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
      const item = await this.model.findByIdAndUpdate(id, { isDeleted: true });
      // await developerService.removeProject(developerId, id);
      await groupService.deleteGroups(id);
      await userService.deleteUsers(id);
      await messageService.deleteMessages(id);

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
