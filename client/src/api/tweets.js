import BaseAPI from './baseApi';

export class TweetsAPI extends BaseAPI {
    url = '/search/tweets'

    async getByKeyword(keyword){
        const result = await this.api.get(`${this.url}?q=${keyword}`)
        return result;
    }
}