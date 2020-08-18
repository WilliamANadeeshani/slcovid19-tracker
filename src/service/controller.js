import _ from 'lodash';

export const currentDataComposer = (text) => {
    return text.text().then(res => {
        if (!text.ok) {
            if (text.status === 400) {
                return Promise.reject('Service not found.');
            }
            return Promise.reject('Service error.');
        }

        let currentData = (JSON.parse(res)).data;
        let obj = {
            lastUpdateTime: currentData.update_date_time,
            newCases: currentData.local_new_cases,
            confirmedCases: currentData.local_total_cases,
            recoveredCases: currentData.local_recovered,
            activeCases: currentData.local_active_cases,
            deaths: currentData.local_deaths,
            dailyTests: _.last(currentData.daily_pcr_testing_data)
        };
        return Promise.resolve(obj);
    });
};

export const visitedPlacesDataComposer = (text) => {
    return text.text().then(res => {
        if (!text.ok) {
            if (text.status === 400) {
                return Promise.reject('Service not found.');
            }
            return Promise.reject('Service error.');
        }
        return Promise.resolve(JSON.parse(res));
    });
};

export const formSubmitDataComposer = (text) => {
    return text.text().then(res => {
        if (!text.ok) {
            if (text.status === 400) {
                return Promise.reject('Service not found.');
            }
            return Promise.reject('Service error.');
        }
        return Promise.resolve(JSON.parse(res).msg);
    });
};