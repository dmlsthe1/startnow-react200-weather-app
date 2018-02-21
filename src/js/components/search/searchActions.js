export function clickPreset(input){
    return {
        type: "CLICK_PRESET",
        payload: {input}
    }
}

export function updateSearchInput(input) {
    return {
        type: "UPDATE_SEARCH_INPUT",
        payload: {input}
    }
}

export function searchBtn(input) {
    return {
        type: "SEARCH_BTN",
        payload: {input}
    }
}