import Service from "./Service";

class UserService extends Service {
  constructor(model) {
    super(model);
  }

  async deleteUsers(id) {

    try {
      const item = await this.model.updateMany({ projectId: id }, { isDeleted: true });
      return item;
    } catch (errors) {
      throw errors;
    }
  }
}

export default UserService;
