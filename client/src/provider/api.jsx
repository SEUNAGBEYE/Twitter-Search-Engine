import React from 'react';

import { TweetsAPI } from '../api/tweets';

const initialTweets = {
    results: [],
    hashtags: []
}

const initialState = {
    q: '',
    type: 'tweet',
    result_type: 'recent',
    tweets: initialTweets,
    isLoading: false
};

const { Provider, Consumer } = React.createContext(initialState);

export const APIConsumer = Consumer;

export class APIProvider extends React.Component{

    
    APIS = {
            tweet: new TweetsAPI()
    }

    handleSearch = this.handleSearch.bind(this);
    handleChangeSearch = this.handleChangeSearch.bind(this);

    async handleSearch({ result_type}){
        this.setState({
            result_type,
            isLoading: true,
            tweets: initialTweets
        })
        const api = this.APIS[this.state.type]
        const results = await api.getByKeyword({q: this.state.q, result_type});
        this.setState({
            tweets: results.data,
            isLoading: false
        })
    }

    async handleChangeSearch(q){
        this.setState({
            q
        })
    }

    state = {
        ...initialState,
        handleSearch: this.handleSearch,
        handleChangeSearch: this.handleChangeSearch
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}
