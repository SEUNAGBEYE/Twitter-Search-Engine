export class BaseClient {

    constructor(baseURL){
        this.client = { baseURL }
    }

    get(){
        throw Error('Not Implemented!')
    }
}