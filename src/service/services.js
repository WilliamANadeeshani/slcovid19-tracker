import {CURRENT_DATA_API} from "./constants";
import {currentDataComposer} from "./controller";

let getCurrentData = () => {
    const URL = CURRENT_DATA_API;
    const requestOptions = {
        method: 'GET'
    };

    return fetch(URL, requestOptions)
        .then(currentDataComposer)
        .then(data => {
            return data;
        })
};

export const services = {
    getCurrentData
};