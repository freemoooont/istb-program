const initialState = {
    schedule: [],
    instituteName: '',
    programName: '',
    errors: [],
    isLoaded: false,
};

const program = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROGRAM':
            return {
                ...state,
                schedule: action.payload[3].schedule,
                instituteName: action.payload[2].instituteShortName,
                programName: action.payload[0].programFullName,
                isLoaded: true
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };

        default:
            return state;
    }
};

export default program;