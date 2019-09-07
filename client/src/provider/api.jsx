import React from 'react';

import { TweetsAPI } from '../api/tweets';

const initialState = {
    key: '',
    type: 'user',
    tweets: {
        results: [],
        hashtags: []
    }
};

const { Provider, Consumer } = React.createContext(initialState);

export const APIConsumer = Consumer;

export class APIProvider extends React.Component{

    
    APIS = {
            tweet: new TweetsAPI()
    }

    handleSearch = this.handleSearch.bind(this);

    async handleSearch(key, type='tweet'){
        this.setState({
            key,
            type
        })
        const api = this.APIS[type]
        const results = await api.getByKeyword(key);
        this.setState({
            tweets: results.data
        })
    }

    state = {
        ...initialState,
        handleSearch: this.handleSearch
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}
