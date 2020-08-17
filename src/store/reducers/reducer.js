import * as actionTypes from "../actions/actionTypes";

const initialState = {
    newCases: 0,
    confirmedCases: 0,
    recoveredCases: 0,
    activeCases: 0,
    deaths: 0,
    lastUpdateTime: null,
    loadingCurrentData: false,
    dailyTests: {date: null, count: 0},
    visitedPlaces: [],
    loadingVisitedPlaces: false,
    formDataResponse: '',
    formDataSubmit: false,
    dataLoading: false

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /** current data fetching */
        case actionTypes.CURRENT_DATA_FETCH_BEGIN:
            return{
                ...state,
                loadingCurrentData: true
            };
        case actionTypes.CURRENT_DATA_FETCH_SUCCESS:
            return{
                ...state,
                loadingCurrentData: false,
                newCases: action.payload.newCases,
                confirmedCases: action.payload.confirmedCases,
                recoveredCases: action.payload.recoveredCases,
                activeCases: action.payload.activeCases,
                deaths: action.payload.deaths,
                lastUpdateTime: action.payload.lastUpdateTime,
                dailyTests: action.payload.dailyTests
            };
        case actionTypes.CURRENT_DATA_FETCH_FAILURE:
            return{
                ...state,
                loadingCurrentData: false
            };

        /** visited place data fetching */
        case actionTypes.VISITED_PLACES_FETCH_BEGIN:
            return{
                ...state,
                loadingVisitedPlaces: true
            };
        case actionTypes.VISITED_PLACES_FETCH_SUCCESS:
            return{
                ...state,
                loadingVisitedPlaces: false,
                visitedPlaces: action.payload
            };

        case actionTypes.VISITED_PLACES_FETCH_FAILURE:
            return{
                ...state,
                loadingVisitedPlaces: true
            };


        /** form data submitting */
        case actionTypes.FORM_DATA_SUBMIT_BEGIN:
            return{
                ...state,
                dataLoading: true
            };
        case actionTypes.FORM_DATA_SUBMIT_SUCCESS:
            return{
                ...state,
                formDataSubmit: true,
                formDataResponse: action.payload,
                dataLoading: false
            };
        case actionTypes.FORM_DATA_SUBMIT_FAILURE:
            return{
                ...state,
                formDataSubmit: true,
                formDataResponse: action.payload,
                dataLoading: false
            };
        case actionTypes.CLOSE_DIALOG:
            return{
                ...state,
                formDataSubmit: false
            };

        default:
            return state
    }
};

export default reducer;