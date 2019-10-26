import request from 'request-promise-native';
import config from '../config.json';

export default async function queryHeatmap(query) {
    return await request(
        `${config.backendUrl}/api/getheat`,
        {
            method: 'POST',
            json: query,
        });
}