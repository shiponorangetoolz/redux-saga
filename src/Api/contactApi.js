import {sendGetRequest} from './rootApi';

export const fetchUserData = async (param = {}) => {
    return await sendGetRequest("get", "https://jsonplaceholder.typicode.com/users", param);
};
