import axios from 'axios';
import { BaseClient } from './index';

export class AxiosClient extends BaseClient {
    constructor(baseURL){
        super(baseURL)
        this.client = axios.create({
            baseURL
        });
        return this.client;
    }
}