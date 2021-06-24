import axios from "axios";

export const fetchProgram = (programName) => dispatch => {
    axios.get('/info.json')
        .then(({ data }) => {
            dispatch(setProgram(data.data));
        }).catch((e)=>console.log(e));
};

export const setProgram = (items) => {
    return({
        type: 'SET_PROGRAM',
        payload: items
    })};

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});