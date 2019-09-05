import BaseAPI from '.baseApi';

export class UserAPI extends BaseAPI {
    static url = '/users/search.json'

    async getUserByKeyword(keyword){
        const result = await this.api.get(`${this.url}?q=${keyword}`)
        return result;
    }
}