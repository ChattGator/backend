import Controller from "./Controller";
import UserService from "../../services/v1/UserService";
import User from "../../models/user";
import autoBind from "auto-bind";

const userService = new UserService(User);

class UserContoller extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new UserContoller(userService);
