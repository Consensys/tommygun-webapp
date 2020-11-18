const axios = require('axios').default;

export default class StateService {
    constructor(settings) {
        this.settings = settings;
        this.refreshConfig();
    }

    async deployContract() {
        try {
            this.refreshConfig();
            const response = await axios.post(this.deployEndpoint);
            return response.data;
        } catch (error) {
            console.log("error", error);
        }
    }

    refreshConfig() {
        this.apiRoot = `${this.settings.backend.url}/${this.settings.backend.stateAPIRoot}`;
        this.deployEndpoint = `${this.apiRoot}/contract/deploy`;
    }
}