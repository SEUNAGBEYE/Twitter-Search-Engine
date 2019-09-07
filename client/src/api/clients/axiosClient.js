import axios from 'axios';
import { BaseClient } from './index';

export class AxiosClient extends BaseClient {
    constructor(baseURL){
        super(baseURL)
        this.client = axios.create({
            baseURL,
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
            }
        });
        return this.client;
    }
}