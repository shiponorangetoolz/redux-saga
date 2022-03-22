import axios from "axios";


export const sendRequest = (method, url, payload = {}) => {
    return axios.request({
        method: method,
        url: url,
        data: payload
    })
        .then(data => data.data)
        .catch((err) => console.log(err))
}

export const sendGetRequest = (method, url, payload = {}) => {
    return axios.request({
        method: method,
        url: url,
        params: payload,
        headers: {
            'Authorization': `bearer "token"`
        }
    })
        .then(data => data.data)
        .catch((err) => console.log(err))
}

export const sendBearerRequest = (method, url, payload = {}) => {
    return axios.request({
        method: method,
        url: url,
        data: payload,
        headers: {
            'Authorization': `bearer "token"`
        }
    })
        .then(data => data.data)
        .catch((err) => console.log(err))
}

