// Dependencies
import queryString from 'query-string';

// Config
import config from '../../config';

const baseURL = `${config.baseUrl}${config.api.url}`;

const api = {
    players: {
        async getList(endPoint, parameters= ''){
            const response = await fetch(`${baseURL}${endPoint}${parameters}`)
            const data = await response.json()
            return data.resultSets[0].rowSet
        },
        async getSingle(endPoint, parameters) {
            
            const response = await fetch(`${baseURL}${endPoint}${parameters}`)
            const data = await response.json()
           
            return data[0].rowSet
        }

    } 
}

export default api




/* 


export function apiFetch(endpoint, options = {}, query = false) {
    let qs;

    if (query) {
        qs = queryString.stringify(query);
    }
    console.log(template.user_agent)

    const getPromise = async () => {
        try {
            const fetchOptions = apiOptions(options);
            const fetchEndpoint = apiEndpoint(endpoint, qs);
            const response = await fetch(fetchEndpoint, fetchOptions);
            console.log(response)
            return response.json();
        } catch (e) {
            throw e;
        }
    };

    return getPromise();
}

export function apiEndpoint(endpoint, qs) {
    let query = '';

    if (qs) {
        query = `?${qs}`;
    }

    return 
}

export function apiOptions(options = {}) {
    const {
    method = 'GET',
        headers = {
            'Content-Type': 'application/json',
/*             "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US",
            "User-Agent": template.user_agent,
            'Referer': template.referrer,
            Connection: "keep-alive",
            "Cache-Control": "no-cache",
            Origin: "http://stats.nba.com", */
 /*       },
        body = false
  } = options;

    const newOptions = {
                method,
        headers,
        mode: 'no-cors'
    };

    if (body) {
        newOptions.body = body;
    }

    return newOptions;
} */