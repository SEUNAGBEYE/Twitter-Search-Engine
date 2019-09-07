import { AxiosClient } from './clients/axiosClient';

class BaseAPI {
    baseURL = 'http://localhost:3001/api';

    constructor(apiClient = AxiosClient) {
        this.api = new apiClient(this.baseURL)
    }

    async getAll(){
        const result = await this.api.get(this.url)
        return result;
    }
}

export default BaseAPI;