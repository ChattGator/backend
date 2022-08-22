import Service from "./Service";
import GroupService from "./GroupService";


class MessageService extends Service {
    constructor(model) {
        super(model);
    }

    async insert(data) {

        try {
            const item = await this.model.create(data);
            await GroupService.addMessage(data.group_id, item_id);

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