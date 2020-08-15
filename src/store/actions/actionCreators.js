import * as actionTypes from './actionTypes';
import {services} from './../../service/services';

export const fetchCurrentData = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.CURRENT_DATA_FETCH_BEGIN
        });
        services.getCurrentData()
            .then(
                data => {
                    dispatch({
                        type: actionTypes.CURRENT_DATA_FETCH_SUCCESS,
                        payload: data
                    })
                },
                error => {
                    dispatch({
                        type: actionTypes.CURRENT_DATA_FETCH_FAILURE,
                        payload: error
                    })
                }
            )
    }
};