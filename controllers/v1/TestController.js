import Controller from "./Controller";
import TestService from "../../services/v1/TestService";
import Test from "../../models/test";
import autoBind from "auto-bind";

const testService = new TestService(Test);

class TestController extends Controller {
  constructor(service) {
    super(service);
    autoBind(this);
  }
}

export default new TestController(testService);
