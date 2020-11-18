const axios = require('axios').default;

export default class TaskService {
    constructor(settings) {
        this.settings = settings;
        this.refreshConfig();
    }

    async getAll() {
        try {
            this.refreshConfig();
            const response = await axios.get(this.getAllTasksEndpoint);
            return response.data;
        } catch (error) {
            console.log("error", error);
        }
    }

    refreshConfig(){
        this.apiRoot = `${this.settings.backend.url}/${this.settings.backend.taskAPIRoot}`;
        this.getAllTasksEndpoint = this.apiRoot;
    }
}