import Controller from "./Controller";
import message from "../../models/message"
import autoBind from "auto-bind";


const messageService = new MessageService(message);

class MessageController extends Controller {

    constructor(service) {
        super(service);
        autoBind(this);
    }

}

export default new MessageController(messageService);