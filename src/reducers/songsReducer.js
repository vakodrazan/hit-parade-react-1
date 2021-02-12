export default function songs(state = [], action) {
	switch (action.type) {
		case 'ADD_SONG':
			return [...state, action.payload];
		case 'FAVORITE_SONG': {
			const newSongArray = state.map((song) => {
				if (song.id === action.payload) {
					return {
						...song,
						isFavorited: !song.isFavorited,
					};
				}
				return song;
			});
			return newSongArray;
		}
		case 'UPVOTE_SONG': {
			const newSongArray = state.map((song) => {
				if (song.id === action.payload) {
					return {
						...song,
						upvotes: song.upvotes + 1,
					};
				}
				return song;
			});
			return newSongArray;
		}
		case 'DOWNVOTE_SONG': {
			const newSongArray = state.map((song) => {
				if (song.id === action.payload) {
					return {
						...song,
						downvotes: song.downvotes + 1,
					};
				}
				return song;
			});
			return newSongArray;
		}
		default:
			return state;
	}
}
