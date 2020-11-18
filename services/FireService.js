const axios = require('axios').default;

export default class FireService {
    constructor(settings) {
        this.settings = settings;
        this.refreshConfig();
    }

    async fireAccounts(accountNumber) {
        try {
            this.refreshConfig();
            const payload = {
                accountNumber: accountNumber,
                stateEntriesNumber: 0,
                stateEntrySize: 0,
            };
            const response = await axios.post(this.fireEndpoint, payload);
            return response.data;
        } catch (error) {
            console.log("error", error);
        }
    }

    async fireState(stateEntriesNumber, stateEntrySize) {
        try {
            this.refreshConfig();
            const payload = {
                accountNumber: 0,
                stateEntriesNumber: stateEntriesNumber,
                stateEntrySize: stateEntrySize,
            };
            const response = await axios.post(this.fireEndpoint, payload);
            return response.data;
        } catch (error) {
            console.log("error", error);
        }
    }

    refreshConfig() {
        this.apiRoot = `${this.settings.backend.url}/${this.settings.backend.fireAPIRoot}`;
        this.fireEndpoint = this.apiRoot;
    }
}