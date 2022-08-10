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
      let item = await this.model.findOne({ email: data.email });

      if (!item) {
        item = await this.insert(data);
      }

      return item;
    } catch (error) {
      throw error;
    }
  }
}

export default DeveloperService;
