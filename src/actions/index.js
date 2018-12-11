export const CHOOSE_LAB_RESULTS_DATE = 'CHOOSE_LAB_RESULTS_DATE';
export const chooseLabResultsDate = date => ({
    type: CHOOSE_LAB_RESULTS_DATE,
    date
});

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const toggleSidebar = toggle => ({
    type: TOGGLE_SIDEBAR,
    toggle
})

export const CHOOSE_APPOINTMENT_MONTH = 'CHOOSE_APPOINTMENT_MONTH';
export const chooseAppointmentMonth = month => ({
    type: CHOOSE_APPOINTMENT_MONTH,
    month
});


