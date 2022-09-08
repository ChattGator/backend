import Service from "./Service";
import HttpResponse from "../../helpers/HttpResponse";

class DeveloperService extends Service {
  constructor(model) {
    super(model);
  }

  async getAll(query) {
    let { skip, limit, sortBy } = query;

    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;
    sortBy = sortBy ? sortBy : { createdAt: -1 };

    delete query.skip;
    delete query.limit;
    delete query.sortBy;
    query['isDeleted'] = false;

    console.log("query", query);

    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id);
      } catch (error) {
        throw new Error("Not able to generate mongoose id with content");
      }
    }
    try {
      const items = await this.model
        .find({ query })
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .populate({ path: 'projects', match: { isDeleted: false }, select: '_id' })
      const total = await this.model.countDocuments(query);

      return new HttpResponse(items, { totalCount: total });
    } catch (errors) {
      throw errors;
    }
  }

  async findByEmail(email) {
    console.log('called1');
    try {
      const item = await this.model.findOne({ email });
      return item;
    } catch (error) {
      throw error;
    }
  }

  async findByEmailOrCreateIfNotFound(data) {
    console.log('called');
    try {
      let item = await this.model.findOne({ email: data.email }).populate({ path: 'projects', match: { isDeleted: 'false' } })

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
