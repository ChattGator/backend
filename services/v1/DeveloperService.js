import Service from "./Service";

class DeveloperService extends Service {
  constructor(model) {
    super(model);
  }

  async findByEmail(email) {
    try {
      const item = await this.model.findOne({ email });
      return item;
    } catch (error) {
      throw error;
    }
  }

  async findByEmailOrCreateIfNotFound(data) {
    try {
      let item = await this.model.findOne({ email: data.email }).populate('projects');

      if (!item) {
        item = await this.insert(data);
      }

      return item;
    } catch (error) {
      throw error;
    }
  }

  async addProject(id, projectId) {
    try {
      const item = await this.model.findByIdAndUpdate(
        id,
        { $push: { projects: projectId } },
        { new: true }
      );

      return item;
    } catch (errors) {
      throw errors;
    }
  }

  async removeProject(id, projectId) {
    try {
      const item = await this.model.findByIdAndUpdate(
        id,
        { $pull: { projects: projectId } },
        { new: true }
      );

      return item;
    } catch (errors) {
      throw errors;
    }
  }
}

export default DeveloperService;
