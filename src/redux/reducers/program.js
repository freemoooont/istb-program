const initialState = {
    schedule: [],
    // courseOne: [],
    // courseTwo: [],
    // courseThree: [],
    // courseFour: [],
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
                // courseOne: action.payload[3].schedule[0].program,
                // courseTwo: action.payload[3].schedule[1].program,
                // courseThree: action.payload[3].schedule[2].program,
                // courseFour: action.payload[3].schedule[3].program,

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