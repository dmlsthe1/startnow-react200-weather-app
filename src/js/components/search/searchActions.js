import axios from "axios";

export function updateSearchInput(input) {
    return {
        type: "UPDATE_SEARCH_INPUT",
        payload: {input}
    }
}

export const searchBtn = (input) => {
    return {
        type: "SEARCH_BTN",
        payload: axios.get(`/weather/${input}`)
                    .then(res => {
                        return res.data;
                    })
    }
}

export const searchCache = (obj) => {
    return {
        type: "SEARCH_CACHE",
        payload: obj
    }
}