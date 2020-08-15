import {CURRENT_DATA_API, VISITED_PLACES_API} from "./constants";
import {currentDataComposer, visitedPlacesDataComposer} from "./controller";

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

let getVisitedPlaces = () => {
    const URL = VISITED_PLACES_API;
    const requestOptions = {
        method: 'GET'
    };

    return fetch(URL, requestOptions)
        .then(visitedPlacesDataComposer)
        .then(data => {
            return data;
        })
};

export const services = {
    getCurrentData,
    getVisitedPlaces
};