import { combineReducers } from "redux";
function songs(state = [], action) {
    switch (action.type) {
        case "ALL_SONGS":
            return action.value
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