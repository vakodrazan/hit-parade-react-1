import songDate from "../../songsData.json";

export function getSongs() {
    return {
        type: "ALL_SONGS",
        value: songDate
    }
}