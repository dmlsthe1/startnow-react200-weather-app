const defaultState = {
    input: "",
    cache: {},
    weather: {},
    history: []
};

export default function SearchReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        
        case "UPDATE_SEARCH_INPUT": {
            return {
                ...state,
                input: payload.input
            }
        }

        case "SEARCH_CACHE": {
            var {date, input} = payload;
            var history = [...state.history, {date, input, success: "Success"}].slice(-5);
            return {
                ...state,
                weather: payload,
                history
            }
        }
        
        case "SEARCH_BTN_FULFILLED": {
            var cache = Object.assign({}, state.cache);
            var key = payload.city.id;
            var date = new Date();
            let history = [...state.history, {date, input: payload.city.name, success: "Success"}].slice(-5);
            date.setHours(date.getHours() + 3);
            cache[key] = action.payload;
            cache[key].date = date;
            
            return {
                ...state,
                weather: payload,
                cache,
                history
            }
        }

        case "SEARCH_BTN_PENDING": {
            return {
                ...state,
                weather: {loading:"loading..."}
            }
        }

        case "SEARCH_BTN_REJECTED": {
            var date = new Date();
            var history = [...state.history, {date, input: "Unknown", success: "Failed"}].slice(-5);
            return {
                ...state,
                weather: {loading:"Failed please try again."},
                history
            }
        }

        default: {
            return state;
        }
    }
    return state;
};