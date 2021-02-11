import { combineReducers } from "redux";
function songs(state = [], action) {
    switch (action.type) {
        case "ALL_SONGS":
            return action.value
    
        default:
            return state;
    }
}
function cartItems(state = [], action) {
    switch (action.type) {
        case "":
            
    
        default:
            return state;
    }
}
function styles(state = [], action) {
    switch (action.type) {
        case "":
            
    
        default:
            return state;
    }
}


export default combineReducers({
    songs,
    cartItems,
    styles
})