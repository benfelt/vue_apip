import axios from 'axios';

import config from '@/config/config.js';

export default class HttpClient {

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    create(data) {

        console.log('HttpClient','create',this.endpoint)
      
        const toReturn = axios.post(`${config.API_URL}/${this.endpoint}`,data)
        
        return toReturn
          .then(result => { console.log(result); return result; })
          .catch(error => { console.error(error); throw error; });
    }

    read(filters) {

        console.log('HttpClient','read',this.endpoint)

        let params = {}
        if ( Object.entries(filters).length !== 0 || filters.constructor !== Object ) {
            params = filters
        }

        const toReturn = axios.get(`${config.API_URL}/${this.endpoint}`, {
            params: params
        })
        
        return toReturn
            .then(result => { console.log(result); return result; })
            .catch(error => { console.error(error); throw error; });
    }

    delete(id) {

        console.log('HttpClient','delete',this.endpoint,id)

        const toReturn = axios.delete(`${config.API_URL}/${this.endpoint}/${id}`, {
            headers : {
                'Accept': 'application/json'
            }
        })
        
        return toReturn
            .then(result => { console.log(result); return result; })
            .catch(error => { console.error(error); throw error; });
    }
}