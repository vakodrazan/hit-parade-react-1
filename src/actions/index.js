import songData from "../../songsData.json";

export function getSongs() {
    return {
        type: "ALL_SONGS"
    }
}
export function upvoteSong(songId) {
    return {
        type: "UPVOTE_SONG",
        value: songId
    }
}
export function downvoteSong(songId) {
    return {
        type: "DOWNVOTE_SONG",
        value: songId
    }
}

export function favoriteSong(songId) {
    return {
        type: "FAVORITE_SONG",
        value: songId
    }
}

export function styleLists() {
    return {
        type: "STYLE_LISTS",
    }
}

export function addSong(song) {
    return {
        type: "ADD_SONG",
        value: song
    }
}

export function cartItems() {
    return {
        type: "CART_ITEMS",
    }
}
export function addToCart(newCart) {
    return {
        type: "ADD_CART",
        value: newCart
    }
}

export function removeCartItem(songId) {
    return {
        type: "REMOVE_CART_ITEM",
        value: songId
    }
}

export function emptyCart() {
    return {
        type: "EMPTY_CART",
    }
}