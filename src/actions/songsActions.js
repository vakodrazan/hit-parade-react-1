import AddSong from '../components/AddSong';

export function addSong(song) {
	return {
		type: 'ADD_SONG',
		payload: song,
	};
}

export function favoriteSong(songId) {
	return {
		type: 'FAVORITE_SONG',
		payload: songId,
	};
}

export function upvoteSong(songId) {
	return {
		type: 'UPVOTE_SONG',
		payload: songId,
	};
}
export function downvoteSong(songId) {
	return {
		type: 'DOWNVOTE_SONG',
		payload: songId,
	};
}
