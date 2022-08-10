import autoBind from "auto-bind";

class Controller {
  constructor(service) {
    this.service = service;
    autoBind(this);
  }

  async getAll(req, res) {
    console.log("here");
    try {
      const response = await this.service.getAll(req.query);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }

  async get(req, res) {
    const { id } = req.params;

    try {
      const response = await this.service.get(id);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }

  async insert(req, res) {
    try {
      const response = await this.service.insert(req.body);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    try {
      const response = await this.service.update(id, req.body);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const response = await this.service.delete(id);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      return res
        .status(e.statusCode || 500)
        .json({ error: true, message: e.message || "Something went wrong" });
    }
  }
}

export default Controller;
