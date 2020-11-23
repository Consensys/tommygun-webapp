const axios = require('axios').default;

export default class InfoService {
    constructor(settings) {
        this.settings = settings;
        this.refreshConfig();
    }

    async globalConfig() {
        try {
            this.refreshConfig();
            const response = await axios.get(this.configEndpoint);
            return response.data;
        } catch (error) {
            console.log("error", error);
        }
    }

    refreshConfig() {
        this.apiRoot = `${this.settings.backend.url}`;
        this.configEndpoint = `${this.apiRoot}/config`;
    }
}