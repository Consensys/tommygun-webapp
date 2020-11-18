const axios = require('axios').default;

export default class TaskService {
    constructor(settings) {
        this.apiRoot = `${settings.backend.url}/${settings.backend.taskAPIRoot}`;
        this.getAllTasksEndpoint = this.apiRoot;
    }

    async getAll() {
        try {
            const response = await axios.get(this.getAllTasksEndpoint);
            return response.data;
        } catch (error) {
            console.log("error", error);
        }
    }
}