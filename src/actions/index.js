import songDate from "../../songsData.json";

export function getSongs() {
    return {
        type: "ALL_SONGS",
        value: songDate
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