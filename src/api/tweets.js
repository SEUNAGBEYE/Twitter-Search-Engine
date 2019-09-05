import BaseAPI from '.baseApi';

export class TweetsAPI extends BaseAPI {
    static url = '/search/tweets.json'

    async getTweetByKeyword(keyword){
        const result = await this.api.get(`${this.url}?q=${keyword}`)
        return result;
    }
}