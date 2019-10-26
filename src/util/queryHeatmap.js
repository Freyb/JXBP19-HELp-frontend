import request from 'request-promise-native';
import config from '../config.json';

export default async function queryHeatmap(prefs) {
    return await request(
        `${config.backendUrl}/api/getheat`,
        {
            method: 'POST',
            json: prefs,
        });
}