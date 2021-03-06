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

export const fetchVisitedPlaces = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.VISITED_PLACES_FETCH_BEGIN
        });
        services.getVisitedPlaces()
            .then(
                data => {
                    dispatch({
                        type: actionTypes.VISITED_PLACES_FETCH_SUCCESS,
                        payload: data
                    })
                },
                error => {
                    dispatch({
                        type: actionTypes.VISITED_PLACES_FETCH_FAILURE,
                        payload: error
                    })
                }
            )
    }
};

export const submitData = (name, mobile) => {
    return dispatch => {
        dispatch({
            type: actionTypes.FORM_DATA_SUBMIT_BEGIN
        });
        services.getFormDataSubmit(name, mobile)
            .then(
                data => {
                    dispatch({
                        type: actionTypes.FORM_DATA_SUBMIT_SUCCESS,
                        payload: data
                    })
                },
                error => {
                    dispatch({
                        type: actionTypes.FORM_DATA_SUBMIT_FAILURE,
                        payload: error
                     })
                }
            )
    }
};

export const closeDialog = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.CLOSE_DIALOG
        });
    }
};