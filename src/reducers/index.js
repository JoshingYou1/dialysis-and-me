import {CHOOSE_LAB_RESULTS_DATE, CHOOSE_APPOINTMENT_MONTH, TOGGLE_SIDEBAR} from '../actions/index';

const initialState = {
    selectedMonth: new Date().getMonth(),
    selectedLabResult: null,
    sidebarIsVisible: true
};

export const appReducer = (state=initialState, action) => {
    if (action.type === CHOOSE_LAB_RESULTS_DATE) {
        return Object.assign({}, state, {
            selectedLabResult: action.date
        });
    }

    else if (action.type === CHOOSE_APPOINTMENT_MONTH) {
        return Object.assign({}, state, {
            selectedMonth: action.month
        });
    }
    else if (action.type === TOGGLE_SIDEBAR) {
        return Object.assign({}, state, {
            sidebarIsVisible: action.toggle
        });
    }
    return state;
}