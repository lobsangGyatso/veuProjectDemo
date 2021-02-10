import axios from 'axios';

class Api{
    
    get(url, headers = {}) {
        url = this.prepareUrl(url);
        const options = {
            headers: headers
        }
        return axios.get(url, options);
    }
    prepareUrl(endpoint) {
        return process.env.VUE_APP_URL_CONFIG + endpoint;
    }
}

export default new Api()