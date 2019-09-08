import { AxiosClient } from './clients/axiosClient';

class BaseAPI {
    baseURL =  `${process.env.REACT_APP_HOST_API}/api`;

    constructor(apiClient = AxiosClient) {
        this.api = new apiClient(this.baseURL)
    }

    async getAll(){
        const result = await this.api.get(this.url)
        return result;
    }
}

export default BaseAPI;