import {CURRENT_DATA_API, VISITED_PLACES_API, FORM_DATA_SUBMIT_API} from "./constants";
import {currentDataComposer, formSubmitDataComposer, visitedPlacesDataComposer} from "./controller";

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

let getFormDataSubmit = (name, mobile) => {
    const URL = FORM_DATA_SUBMIT_API;
    // (unused parameters) due to limitation of mock service ->. cannot create free POST mock service with request payload.
    const requestOptions = {
        method: 'POST'
    };

    return fetch(URL, requestOptions)
        .then(formSubmitDataComposer)
        .then(data => {
            return data;
        });
};

export const services = {
    getCurrentData,
    getVisitedPlaces,
    getFormDataSubmit
};