import Service from "./Service";
import HttpResponse from "../../helpers/HttpResponse";

class GroupService extends Service {
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

    if (query._id) {
      try {
        query._id = new mongoose.mongo.ObjectId(query._id);
      } catch (error) {
        throw new Error("Not able to generate mongoose id with content");
      }
    }

    try {
      const items = await this.model
        .find(query)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .populate("membersList", "name");
      const total = await this.model.countDocuments(query);

      return new HttpResponse(items, { totalCount: total });
    } catch (errors) {
      throw errors;
    }
  }

  async get(id) {
    
    try {
      const item = await this.model
        .findById(id)
        .populate("membersList", "name");

      if (!item) {
        const error = new Error("Item not found");

        error.statusCode = 404;
        throw error;
      }

      return new HttpResponse(item);
    } catch (errors) {
      throw errors;
    }
  }

  async addMember(id, data) {
    const { memberId } = data;

    try {
      const item = await this.model.findByIdAndUpdate(
        id,
        { $push: { membersList: memberId } },
        { new: true }
      );

      return new HttpResponse(item);
    } catch (errors) {
      throw errors;
    }
  }

  async removeMember(id, data) {
    const { memberId } = data;
    try {
      const item = await this.model.findByIdAndUpdate(
        id,
        { $pull: { membersList: memberId } },
        { new: true }
      );

      return new HttpResponse(item);
    } catch (errors) {
      throw errors;
    }
  }
}

export default GroupService;
