import React from 'react';

import { UserAPI } from '../api/users';

const initialState = {};

const { Provider, Consumer } = React.createContext(initialState);

export const UserConsumer = Consumer;

export class UserResultProvider extends React.Component{
    userAPI = new UserAPI()
    state = {
        ...initialState
    }

    render() {
        return <Provider value={this.state}>{this.props.children}</Provider>;
    }
}
