import React, { useState, useEffect } from 'react';
import songData from '../songsData.json';

const Context = React.createContext();

function ContextProvider({ children }) {
	const [songs, setSongs] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [styles, setStyles] = useState(['Pop', 'Salegy', 'Reggae', 'Rock', 'Folk', 'Rap']);

	useEffect(() => {
		setSongs(songData);
	}, []);

	function favoriteSong(songId) {
		// how should I modify the state here?
		// recreate a WHOLE new state array
		// we want to update the state in an IMMUTABLE WAY
		const updatedSongs = songs.map(song => {
			if (song.id === songId) {
				return {
					...song,
					isFavorited: !song.isFavorited,
				};
			}
			return song;
		});
		// set it into our state!
		setSongs(updatedSongs);
	}

	function upvoteSong(songId) {
		const updatedSongs = songs.map(song => {
			if (song.id === songId) {
				return {
					...song,
					upvotes: song.upvotes + 1,
				};
			}
			return song;
		});
		setSongs(updatedSongs);
	}

	function downvoteSong(songId) {
		const updatedSongs = songs.map(song => {
			if (song.id === songId) {
				return {
					...song,
					downvotes: song.downvotes + 1,
				};
			}
			return song;
		});
		setSongs(updatedSongs);
	}

	function addToCart(song) {
		// push in an immutable way
		setCartItems(prevItems => [...prevItems, song]);
	}

	return (
		<Context.Provider
			value={{ songs, styles, favoriteSong, upvoteSong, downvoteSong, addToCart, cartItems }}
		>
			{children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };
