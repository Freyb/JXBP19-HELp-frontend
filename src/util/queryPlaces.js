import request from 'request-promise-native';
import config from '../config.json';

let counter = 0;
export default async function queryPlaces(lat, lng, tags) {
    console.log(tags);
    return [{ "name": "Helsinkee Sauna" + (counter++), "id": 1 }, { "name": "BeEr", "id": 2 }, { "name": "BeerSauna", "id": 3 },];
    // return await request(
    //     `${config.backendUrl}/api/getheat`,
    //     {
    //         method: 'POST',
    //         json: prefs,
    //     });
}