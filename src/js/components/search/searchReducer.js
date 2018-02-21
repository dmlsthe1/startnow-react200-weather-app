const defaultState = {
    input: ""
};

export default function SearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case "CLICK_PRESET": {
            return {
                input: payload.input
            }
        }
        
        case "UPDATE_SEARCH_INPUT": {
            return {
                input: payload.input
            }
        }
        
        case "SEARCH_BTN": {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
    return state;
};