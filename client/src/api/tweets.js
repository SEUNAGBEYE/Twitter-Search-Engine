import BaseAPI from './baseApi';

export class TweetsAPI extends BaseAPI {
    url = '/search/tweets'

    async getByKeyword({q, result_type}){
        const result = await this.api.get(
            `${this.url}?q=${q}&result_type=${result_type}`
        )
        return result;
    }
}