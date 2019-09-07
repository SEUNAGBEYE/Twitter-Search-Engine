import axios from 'axios';
import config from 'dotenv';

config.config()
import { BaseClient } from './index';

export class AxiosClient extends BaseClient {
    constructor(baseURL){
        super(baseURL)
        this.client = axios.create({
            baseURL,
            headers: {
                Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
            }
        });
        return this.client;
    }
}