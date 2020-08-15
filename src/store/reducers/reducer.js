import * as actionTypes from "../actions/actionTypes";

const initialState = {
    newCases: 0,
    confirmedCases: 0,
    recoveredCases: 0,
    activeCases: 0,
    deaths: 0,
    lastUpdateTime: null,
    loadingCurrentData: false,
    dailyTests: {date: null, count: 0}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
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
        default:
            return state
    }
};

export default reducer;