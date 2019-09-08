import BaseAPI from './baseApi';

class TweetsAPI extends BaseAPI {

    url = '/search/tweets.json'
    count = 100;
    getByKeyword = this.getByKeyword.bind(this)

    async getByKeyword(request, response){
        const hash = {};
        let hashtags = []
        const keyword = request.query.q;
        const result_type = request.query.result_type || 'recent';
        let results = await this.api.get(`${this.url}?q=${keyword}&result_type=${result_type}&count=${this.count}`)
        results = results.data.statuses.map(tweet => {
            tweet.entities.hashtags.map(hashtag => {
                let value = hashtag.text
                if (!hash[value]){
                    hash[value] = 1
                } else {
                    hash[value]++
                }
            })

            return tweet
        })

        for (let key in hash){
            hashtags.push({ text: key, count: hash[key]})
        }

        hashtags = hashtags.sort((a, b) => b.count - a.count).slice(0, 10);
        return response.status(200).send({ results, hashtags });
    }
}

export default new TweetsAPI()