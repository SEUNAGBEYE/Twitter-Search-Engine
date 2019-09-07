import { AxiosClient } from './clients/axiosClient';

class BaseAPI {
    baseURL = 'https://api.twitter.com/1.1';

    constructor(apiClient = AxiosClient) {
        this.api = new apiClient(this.baseURL)
    }

    async getAll(){
        const result = await this.api.get(this.url)
        return result;
    }
}

export default BaseAPI;