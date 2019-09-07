import BaseAPI from './baseApi';

export class UserAPI extends BaseAPI {
    url = '/users/search.json'

    async getByKeyword(keyword){
        const result = await this.api.get(`${this.url}?q=${keyword}`)
        return result;
    }
}