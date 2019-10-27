import request from 'request-promise-native';
import config from '../config.json';

let counter = 0;
export default async function queryPlaces(lat, lng, tags) {
    return await request(
        `${config.backendUrl}/api/getnearby`,
        {
            method: 'POST',
            json: {
                latitude: lat,
                longitude: lng,
                tags
            },
        });
}