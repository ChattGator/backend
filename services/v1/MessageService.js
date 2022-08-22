import Service from "./Service";
import GroupService from "./GroupService";
import group from "../../models/group";
import HttpResponse from "../../helpers/HttpResponse";
const groupService = new GroupService(group);

class MessageService extends Service {
    constructor(model) {
        super(model);
    }

    async insert(data) {
        console.log(data);
        try {
            const item = await this.model.create(data);
            await groupService.addMessage(data.groupId, item._id);

            if (item) {
                return new HttpResponse(item);
            }
            throw new Error("Something wrong happened");
        } catch (error) {
            throw error;
        }

    }
}

export default MessageService;