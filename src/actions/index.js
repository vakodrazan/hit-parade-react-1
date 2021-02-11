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