const defaultState = {
    user: false,
    token: null,
    typeLogin: null,
};

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.action
                // action.action containt this keys token, user and typeLogin
            }
        case 'LOGOUT':
            return {
                ...state,
                user: false,
                token: null,
                typeLogin: null,
            }
        default:
            return state;
    }
}