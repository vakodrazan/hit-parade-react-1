import { combineReducers } from "redux";
function songs(state = [], action) {
    switch (action.type) {
        case "ALL_SONGS":
            return [...state]
        case "UPVOTE_SONG":
            return state.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        upvotes: song.upvotes + 1,
                    };
                }
                return song;
            });
        case "DOWNVOTE_SONG":
            return state.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        downvotes: song.downvotes + 1,
                    };
                }
                return song;
            });
        case "FAVORITE_SONG":
            return state.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        isFavorited: !song.isFavorited,
                    };
                }
                return song;
            }) 
        case "ADD_SONG": 
            return [...state, action.value]
        default:
            return state;
    }
}
function cartItems(state = [], action) {
    switch (action.type) {
        case "CART_ITEMS":
            return state

        case "ADD_CART": 
            return [...state, action.value]
        case "REMOVE_CART_ITEM": 
            return state.filter(cartItem => cartItem.id !== action.value)
        case "EMPTY_CART": 
            return []
        default:
            return state;
    }
}
function styles(state = [], action) {
    switch (action.type) {
        case "STYLE_LISTS":
            return state
        default:
            return state;
    }
}

export default combineReducers({
    songs,
    cartItems,
    styles
})